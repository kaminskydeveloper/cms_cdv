import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';
import Button from '../components/CustomButton';

const ContentWrapper = styled.div`
  display; grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  .title-container {
    margin: 4rem 0;
  }

  form {
    display: grid;
    width: 40%;
    margin: 0 auto;
   
    

    input, textarea {
      background-color: ${StyleConstants.PURPLE_LIGHT}
      border: none;
      padding: 1.3rem;
      margin: 1rem 0;
    }

    button {
      width: 20%;
      height: 45px;
      margin: 0 auto;
    }
  }
`;

export default function contact() {
  return (
    <Layout>
      <ContentWrapper>
        <div className="title-container">
          <h2>Contact</h2>
          <p>Send a message</p>
        </div>

        <form>
          <p>Name</p>
          <input type="text" />
          <p>Email</p>
          <input type="text" />
          <p>Content</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <Button>Send</Button>
        </form>
      </ContentWrapper>
    </Layout>
  );
}
