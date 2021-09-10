import React from "react";
import Scroll from "react-scroll";
import RubenLogo from "../../Images/RubenLogo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  RubenLogoImage,
} from "./NavbarElements";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ toggle }) => {
  const scroll = Scroll.animateScroll;
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={() => scroll.scrollToTop()} to="/">
            <RubenLogoImage
              src={RubenLogo}
              alt="Dr. Ruben Rajakumar, Liberal Party Candidate for Saskatoon West"
            />
          </NavLogo>
          <MobileIcon>
            <GiHamburgerMenu onClick={toggle} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => scroll.scrollToTop()} to="/">
                Home
              </NavLinks>
              <NavLinks smooth to="/#aboutRuben">
                About Ruben
              </NavLinks>
              <NavLinks smooth to="/#rubensVision">
                Ruben's Vision
              </NavLinks>
              <NavLinks smooth to="/lawnsign">
                Get a Lawn Sign
              </NavLinks>
              <NavLinks smooth to="/#contactSection">
                Contact Us
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/donate">Donate</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
