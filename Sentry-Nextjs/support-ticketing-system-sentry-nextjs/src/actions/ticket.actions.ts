"use server";

import { prisma } from "@/db/prisma";
import { revalidatePath } from "next/cache";
import { logEvent } from "@/utils/sentry";

export async function createTicket(
  prevState: { success: boolean; message: string },
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  try {
    const subject = formData.get("subject") as string;
    const description = formData.get("description") as string;
    const priority = formData.get("priority") as string;

    console.log("Ticket Submitted:", { subject, description, priority });

    if (!subject || !description || !priority) {
      logEvent(
        "validation error: Missing fields in ticket submission",
        "ticket",
        { subject, description, priority },
        "warning"
      );
      return { success: false, message: "All fields are required." };
    }
    // Create ticket in the database
    const ticket = await prisma.ticket.create({
      data: {
        subject,
        description,
        priority,
      },
    });
    logEvent(
      `Ticket created successfully: ${ticket.id}`,
      "ticket",
      { ticketId: ticket.id },
      "info"
    );
    revalidatePath("/tickets");
    return { success: true, message: "Ticket submitted successfully" };
  } catch (error) {
    logEvent(
      "An error occured while creating the ticket",
      "ticket",
      { formData: Object.fromEntries(formData.entries()) },
      "error",
      error
    );
    return {
      success: false,
      message: "An error occured while creating the ticket",
    };
  }
}
export async function fetchAllTickets() {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: { createdAt: "desc" },
    });
    logEvent(
      `Fetched ${tickets.length} tickets successfully`,
      "ticket",
      { ticketCount: tickets.length },
      "info"
    );
    return tickets;
  } catch (error) {
    logEvent(
      "An error occured while fetching tickets",
      "ticket",
      {},
      "error",
      error
    );
    return [];
  }
}
