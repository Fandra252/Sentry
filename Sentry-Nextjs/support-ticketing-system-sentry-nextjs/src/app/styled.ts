"use client";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111313;
  gap: 20px;
`;
export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;
export const SubmitTicketButton = styled(Link)`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
export const ViewAllTicketsButton = styled(Link)`
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #007bb5;
  }
`;
