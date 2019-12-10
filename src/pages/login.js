import React from 'react';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';
import Button from '../components/CustomButton';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 1.6rem;
    padding: 1rem;
    font-weight: 500;
  }

  .bottomParagraph {
    padding: 1rem;

    a {
      font-weight: 600;
    }
  }

  form {
    text-align: center;
    .inputWrapper {
      padding: 1rem;

      input {
        padding: 0.7rem 1rem;
        background-color: ${StyleConstants.PURPLE_LIGHT};
        border: none;
        border-radius: 7px;
        width: 300px;
      }
    }
  }
`;

export default function login() {
  return (
    <LoginWrapper>
      <h3>Zaloguj się do CDV CMS</h3>
      <form>
        <div className="inputWrapper">
          <input type="text" name="login" placeholder="Podaj login..." />
        </div>
        <div className="inputWrapper">
          <input type="password" name="login" placeholder="Podaj hasło..." />
        </div>

        <Button>Zaloguj</Button>
      </form>

      <p className="bottomParagraph">
        lub przejdź do <Link to="/">strony głównej</Link>.
      </p>
    </LoginWrapper>
  );
}
