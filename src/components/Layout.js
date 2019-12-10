import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyle>
      <Navbar />
      {children}
      <Footer />
    </LayoutStyle>
  );
}
