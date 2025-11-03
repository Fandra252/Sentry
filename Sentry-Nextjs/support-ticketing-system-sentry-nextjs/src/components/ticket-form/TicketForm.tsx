"use client";

import { useActionState, useEffect } from "react";
import {
  ErrorMessage,
  FormContainer,
  FormDropdown,
  FormInput,
  FormOption,
  FormTextArea,
  FormTitle,
  SubmitButton,
} from "./styled";
import { createTicket } from "@/actions/ticket.actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const TicketForm = () => {
  const [state, formAction] = useActionState(createTicket, {
    success: false,
    message: "",
  });
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      toast.success("Ticket submitted successfully!");
      router.push("/tickets");
    }
  }, [state.success, router]);
  return (
    <FormContainer action={formAction}>
      <FormTitle>Submit a Support Ticket</FormTitle>
      {state.message && !state.success && (
        <ErrorMessage>{state.message}</ErrorMessage>
      )}
      <FormInput type="text" name="subject" placeholder="Subject" />
      <FormTextArea
        name="description"
        placeholder="Describe your issue..."
        rows={5}
      />
      <FormDropdown name="priority" defaultValue="Low">
        <FormOption value="Low">Low Priority</FormOption>
        <FormOption value="Medium">Medium Priority</FormOption>
        <FormOption value="High">High Priority</FormOption>
      </FormDropdown>
      <SubmitButton type="submit">Submit Ticket</SubmitButton>
    </FormContainer>
  );
};

export default TicketForm;
