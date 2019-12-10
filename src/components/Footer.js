import React from 'react';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';

const FooterContainer = styled.footer`
  height: 60px;
  background-color: ${StyleConstants.MAIN_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  p {
    color: #fff;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>Autorzy projektu: Damian Kamiński i Jan Chade</p>
    </FooterContainer>
  );
}
