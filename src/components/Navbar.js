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

    .logoLink {
      font-weight: 600;
    }

    .hoverDiv {
      li {
        &:hover {
          background-color: #c3bbff;
          cursor: pointer;
          transition: background-color 0.3s ease-in;
        }
      }
    }

    li {
      height: 70px;
      margin: 0 auto;
      display: flex;
      align-items: center;

      a {
        color: #fff;
        padding: 0 1.5rem;
      }
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
          <li>
            <Link to="/" className="logoLink">
              CDV CMS
            </Link>
          </li>
        </div>
        <div className="hoverDiv">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {' '}
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </ul>
    </Nav>
  );
}
