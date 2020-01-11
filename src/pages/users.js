import React, { Component } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';

const ContentWrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 0 auto;
  color: ${StyleConstants.MAIN_TEXT};
  font-size: 0.7rem;
  grid-gap: 3rem;
  justify-content: center;
  padding: 0 5rem;

  p {
    padding: 0.8rem 0;
  }

  .first-column {
    display: grid;
    align-items: start;
    margin-top: 3rem;
  }

  .second-column {
    display: grid;
    align-items: start;
    margin-top: 3rem;
    padding: 0 4rem;
  }
`;

class users extends Component {
  render() {
    return (
      <DashboardLayout>
        <ContentWrapper>
          <h1>users</h1>
        </ContentWrapper>
      </DashboardLayout>
    );
  }
}

export default users;
