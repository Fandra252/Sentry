"use client";
import { useActionState } from "react";
import { Container } from "@/app/styled";
import {
  FormContainer,
  FormDropdown,
  FormInput,
  FormOption,
  FormTextArea,
  FormTitle,
  SubmitButton,
} from "./styled";
import { createTicket } from "@/actions/ticket.actions";

const NewTicketPage = () => {
  const [state, formAction] = useActionState(createTicket, {
    success: false,
    message: "",
  });
  return (
    <Container>
      <FormContainer action={formAction}>
        <FormTitle>Submit a Support Ticket</FormTitle>
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
    </Container>
  );
};

export default NewTicketPage;
