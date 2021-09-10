import styled from "styled-components";
import { HashLink as LinkInpage } from "react-router-hash-link";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  color: #000;
`;

export const SidebarWrapper = styled.div`
  color: white;
  width: 100%;
  padding: 0px;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  list-style-type: none;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 80px);
  }
`;

export const SidebarLink = styled(LinkInpage)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-family: neue-haas-grotesk-display, sans-serif;

  &:hover {
    color: #d71920;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 0px;
  background: #d71920;
  white-space: nowrap;
  padding: 14px 32px;
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
