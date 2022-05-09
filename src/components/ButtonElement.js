import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};

  white-space: nowrap;
  outline: none;

  border-radius: 50px;
  border: none;

  cursor: pointer;

  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};

  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;

    background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
  }
`;
