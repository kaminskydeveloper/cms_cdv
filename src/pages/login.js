import React, { Component } from 'react';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';
import Button from '../components/CustomButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
class login extends Component {
  state = {
    email: '',
    password: '',
  };

  loginUser = e => {
    e.preventDefault();

    axios
      .post('https://europe-west1-cdv-cms.cloudfunctions.net/api/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then(res => {
        const FBIdToken = `Bearer ${res.data.token}`;
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        axios.defaults.headers.common['Authorization'] = FBIdToken;
        this.props.history.push('/dashboard');
      })
      .catch(err => alert('wrong credentials!'));
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <LoginWrapper>
        <h3>Zaloguj się do CDV CMS</h3>
        <form onSubmit={this.loginUser}>
          <div className="inputWrapper">
            <input
              type="text"
              name="email"
              placeholder="Podaj email..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="inputWrapper">
            <input
              type="password"
              name="password"
              placeholder="Podaj hasło..."
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <Button>Zaloguj</Button>
        </form>

        <p className="bottomParagraph">
          lub przejdź do <Link to="/">strony głównej</Link>.
        </p>
      </LoginWrapper>
    );
  }
}

export default login;
