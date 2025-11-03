"use client";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
export const TicketsHeading = styled.h1`
  font-size: 2rem;
`;
export const TicketsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
export const TicketWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const TicketSubject = styled.h2`
  font-size: 1.5rem;
`;
export const TicketDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const TicketStatus = styled.p<{ status: string }>`
  font-size: 1rem;
  color: ${({ status }) =>
    status === "High" ? "green" : status === "low" ? "red" : "orange"};
`;
export const ViewTicketButton = styled(Link)`
  padding: 10px;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;
