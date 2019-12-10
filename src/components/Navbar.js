import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #8b83c5;
  height: 70px;

  ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    li {
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
          <li>CDV CMS</li>
        </div>
        <div>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </div>
      </ul>
    </Nav>
  );
}
