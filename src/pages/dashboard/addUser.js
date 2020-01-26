import React, { Component } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';
import * as StyleConstants from '../../styles/StyleConstants';
import Button from '../../components/CustomButton';
import axios from 'axios';

const ContentWrapper = styled.div`
  color: ${StyleConstants.MAIN_TEXT};
  padding: 3rem;
  width: 100%;

  h2 {
    margin-bottom: 3rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  width: 100%;

  input,
  textarea {
    background-color: ${StyleConstants.PURPLE_LIGHT};
    border: none;
    padding: 1rem;
    width: 80%;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  p {
    margin: 1rem 0;
  }

  .add-success-paragraph {
    color: green;
    font-weight: 600;
  }
`;

class addUser extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    admin: false,
    addSuccess: false,
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSelectChange = event => {
    this.setState({ admin: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let newUserData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      admin: this.state.admin,
    };
    axios
      .post(
        'https://europe-west1-cdv-cms.cloudfunctions.net/api/addUser',
        newUserData,
        { headers: { Authorization: `${localStorage.getItem('FBIdToken')}` } }
      )
      .then(res => {
        console.log(res);
        this.setState({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          admin: false,
          addSuccess: true,
        });
        setTimeout(() => {
          this.setState({ addSuccess: false });
        }, 3000);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <DashboardLayout>
        <ContentWrapper>
          <h2>Add article</h2>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <p>Username</p>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <p>Email</p>
              <input
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <p>Admin</p>
              <select
                value={this.state.admin}
                onChange={this.handleSelectChange}
              >
                <option value={false}>NO</option>
                <option value={true}>YES</option>
              </select>
            </div>
            <div>
              <p>Password</p>
              <input
                type="text"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <p>Confirm Password</p>
              <input
                name="confirmPassword"
                onChange={this.handleChange}
                value={this.state.confirmPassword}
              />
              <div className="buttons-container">
                <Button>ADD USER</Button>
                {this.state.addSuccess && (
                  <p className="add-success-paragraph">
                    User added successfully
                  </p>
                )}
              </div>
            </div>
          </Form>
        </ContentWrapper>
      </DashboardLayout>
    );
  }
}

export default addUser;
