import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: #f48599;
  white-space: nowrap;
  padding: 1.2rem 3rem;
  color: #010606;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ darkBg }) => (darkBg ? '#fff' : '#010606')};
    color: ${({ darkBg }) => (darkBg ? '#010606' : '#fff')};
  }
`;
