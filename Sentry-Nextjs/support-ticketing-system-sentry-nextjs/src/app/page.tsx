import { Container, SubmitTicketButton, Title, ViewAllTicketsButton } from "./styled";

export default function Home() {
  return (
    <Container>
      <Title>Welcome to the Support Ticketing System</Title>
      <SubmitTicketButton href={"/tickets/new"}>Submit Ticket</SubmitTicketButton>
      <ViewAllTicketsButton href={"/tickets"}>View Tickets</ViewAllTicketsButton>
    </Container>
  );
}
