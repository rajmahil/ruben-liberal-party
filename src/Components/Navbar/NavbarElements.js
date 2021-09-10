import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { HashLink as LinkInpage } from "react-router-hash-link";

export const Nav = styled.nav`
  background: #fff;
  height: 8vh;
  /*  margin-top: -80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    height: auto;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 100px;

  @media screen and (max-width: 1090px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const RubenLogoImage = styled.img`
  width: 250px;
  height: auto;

  @media screen and (max-width: 480px) {
    width: 200px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  text-align: left;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1150px) {
    display: block;
    position: abosolute;
    top: 0;
    rigth: 0;
    /* transform: translate(-100%, 60%);*/
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -22px; */

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  height: 80px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const NavLinks = styled(LinkInpage)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
  font-family: neue-haas-grotesk-display, sans-serif;

  &.active {
    border-bottom: 3px solid #d71920;
  }

  &:hover {
    color: #d71920;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 0px;
  background: #d71920;
  white-space: nowrap;
  padding: 10px 26px;
  color: #fff;
  font-size: 1.1em;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: neue-haas-grotesk-display, sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;
