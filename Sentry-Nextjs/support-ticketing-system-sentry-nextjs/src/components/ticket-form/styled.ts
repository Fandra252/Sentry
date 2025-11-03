import styled from "styled-components";

export const FormContainer = styled.form`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #222626;
  padding: 30px;
  border-radius: 8px;
`;
export const FormTitle = styled.h2`
  font-size: 1.8rem;
  color: white;
  text-align: center;
  margin-bottom: 15px;
`;
export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: white;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;
export const FormTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: white;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;
export const FormDropdown = styled.select`
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: white;
  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;
export const FormOption = styled.option`
  background-color: #333;
  color: white;
`;
export const SubmitButton = styled.button`
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
export const ErrorMessage = styled.div`
  color: #ff4d4f;
  background-color: #ffe6e6;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
`;
