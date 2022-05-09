import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
  display: grid;
  align-items: center;

  top: 0;
  left: 0;

  position: fixed;
  z-index: 999;

  width: 100%;
  height: 100%;

  background: #0d0d0d;

  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;

  cursor: pointer;

  outline: none;

  background: transparent;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;

  text-decoration: none;
  list-style: none;
  text-decoration: none;

  cursor: pointer;

  color: #fff;

  transition: 0.2s ease-in-out;

  &:hover {
    color: #01bf61;

    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  padding: 16px 64px;

  border-radius: 50px;
  border: none;

  white-space: nowrap;
  outline: none;
  text-decoration: none;

  font-size: 16px;

  cursor: pointer;

  color: #010606;
  background: #01bf71;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;

    color: #010606;
    background: #fff;
  }
`;
