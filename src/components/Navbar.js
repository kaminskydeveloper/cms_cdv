import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #8b83c5;
  height: 70px;

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    a {
      color: #fff;
      padding: 0 1.5rem;
    }

    div {
      display: flex;
      margin: 0;
      padding: 0 3rem;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <ul>
        <div>
          <Link to="/">CDV CMS</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </ul>
    </Nav>
  );
}
