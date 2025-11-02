import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
