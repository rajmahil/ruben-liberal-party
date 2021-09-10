import styled from "styled-components";
import { Link as LinkMain } from "react-router-dom";
import { Link as LinkSec } from "react-router-dom";

export const MainButton = styled(LinkMain)`
  border-radius: 0px;
  background: #d71920;
  white-space: nowrap;
  padding: 10px 26px;
  color: #fff;
  font-size: 1.1em;
  font-weight: 600;
  outline: none;
  border: 2px solid #d71920;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: neue-haas-grotesk-display, sans-serif;
  margin-right: 8px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
    border: 2px solid #000;
  }
`;

export const SecButton = styled(LinkSec)`
  border-radius: 0px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 26px;
  color: #000;
  font-size: 1.1em;
  font-weight: 600;
  outline: none;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: neue-haas-grotesk-display, sans-serif;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;
