import React from 'react';
import styled from 'styled-components';
import DashboardNavbar from './DashboardNavbar';

const LayoutStyle = styled.div`
  min-height: 100vh;

  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export default function DashboardLayout({ children }) {
  return (
    <LayoutStyle>
      <DashboardNavbar />
      {children}
    </LayoutStyle>
  );
}
