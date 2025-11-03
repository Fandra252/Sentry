import { fetchAllTickets } from "@/actions/ticket.actions";
import {
  TicketDetailsWrapper,
  TicketsContainer,
  TicketsHeading,
  TicketStatus,
  TicketSubject,
  TicketWrapper,
  ViewTicketButton,
} from "./styled";
import { Container } from "../styled";

const Tickets = async () => {
  const tickets = await fetchAllTickets();
  return (
    <Container>
      <TicketsHeading>Tickets</TicketsHeading>
      <TicketsContainer>
        {tickets.length === 0 ? (
          <li>No tickets found.</li>
        ) : (
          <>
            {tickets.map((ticket) => (
              <TicketWrapper key={ticket.id}>
                <TicketSubject>{ticket.subject}</TicketSubject>
                <TicketDetailsWrapper>
                  <TicketStatus status={ticket.priority}>
                    Priority: {ticket.priority}
                  </TicketStatus>
                  <ViewTicketButton href={`/tickets/${ticket.id}`}>
                    View Ticket
                  </ViewTicketButton>
                </TicketDetailsWrapper>
              </TicketWrapper>
            ))}
          </>
        )}
      </TicketsContainer>
    </Container>
  );
};
export default Tickets;
