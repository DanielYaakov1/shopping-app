import styled from 'styled-components';
export const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border-radius: 3px;
  width: 50%;
  border: 1px solid #ccc;
  &:hover {
    background: #ccc;
  }
  &:disabled {
    color: grey;
    background: #ccc;
  }
`;
