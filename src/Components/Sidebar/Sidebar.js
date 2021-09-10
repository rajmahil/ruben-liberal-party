import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <IoCloseSharp onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink smooth to="/#aboutRuben" onClick={toggle}>
            About Ruben
          </SidebarLink>
          <SidebarLink smooth to="/#rubensVision" onClick={toggle}>
            Ruben's Vision
          </SidebarLink>
          <SidebarLink smooth to="/lawnsign" onClick={toggle}>
            Get a Lawn Sign
          </SidebarLink>
          <SidebarLink smooth to="/#contactSection" onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/donate" onClick={toggle}>
            Donate
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
