import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as StyleConstants from '../styles/StyleConstants';

const Nav = styled.nav`
  background-color: ${StyleConstants.MAIN_COLOR};
  height: 100%;
  width: 200px;
  color: white;
  display: grid;
  justify-content: center;
  align-items: start;
  text-align: center;

  .logo {
    padding-top: 2rem;
    font-weight: 600;
  }

  .logout {
    align-self: end;
    padding-bottom: 2rem;
  }

  ul {
    li {
      color: white;
      padding: 0.8rem;
      font-size: 0.8rem;

      a {
        text-decoration: none;
        color: white;

        &:hover {
          color: ${StyleConstants.LINK_HOVER};
        }
      }
    }
  }
`;

export default function DashboardNavbar() {
  return (
    <Nav>
      <ul className="logo">
        <li>
          <Link to="/">cdv CMS</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/articles">Articles</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <ul className="logout">
        <li>Logout</li>
      </ul>
    </Nav>
  );
}
