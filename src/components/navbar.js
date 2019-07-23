import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 300;
  &:not(:first-child) {
    margin-left: 2rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const LogoLink = styled(StyledLink)`
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Nav>
      <LogoLink to="/">WHODIS</LogoLink>
      <div>
        <StyledLink to="/pricing">Pricing</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </div>
    </Nav>
  );
};

export default Navbar;
