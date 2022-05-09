import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 10;

  /* margin-top: -80px; */

  height: 80px;

  font-size: 1rem;

  background: #000;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 24px;

  height: 80px;
  width: 100%;
  max-width: 1100px;

  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  align-items: center;

  margin-left: 24px;

  justify-self: flex-start;

  cursor: pointer;

  font-size: 1.5rem;
  font-weight: bold;

  text-decoration: none;

  color: #fff;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;

    position: absolute;
    top: 0;
    right: 0;

    transform: translate(-100%, 60%);

    font-size: 1.8rem;

    cursor: pointer;

    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  margin-right: -22px;

  text-align: center;

  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;

  padding: 0 1rem;

  height: 100%;

  text-decoration: none;

  cursor: pointer;

  color: #fff;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  padding: 10px 22px;

  border-radius: 50px;
  border: none;

  white-space: nowrap;

  font-size: 16px;
  outline: none;

  background: #01bf71;
  color: #010606;

  cursor: pointer;

  text-decoration: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;

    background: #fff;
    color: #010606;
  }
`;
