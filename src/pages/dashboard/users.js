import React, { Component } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';
import * as StyleConstants from '../../styles/StyleConstants';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../../components/CustomButton';
import LoadingSpinner from '../../images/LoadingSpinner.svg';

const ContentWrapper = styled.div`
  padding: 3rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
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

  .add-button {
    justify-self: end;
  }
`;

const SingleUser = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem;
  margin: 1rem auto;
  background-color: ${StyleConstants.PURPLE_LIGHT};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;

  h4 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.7rem;
  }

  .delete-container {
    align-self: center;
  }

  .delete-container {
    .delete-button {
      border: none;
      color: white;
      padding: 0.5rem 0.7rem;
      background-color: ${StyleConstants.BASIC_RED};

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

class users extends Component {
  state = { users: [], loading: true };

  componentDidMount = () => {
    axios
      .get('/getUsers', {
        headers: { Authorization: `${localStorage.getItem('FBIdToken')}` },
      })
      .then(res => this.setState({ users: res.data, loading: false }))
      .catch(err => console.log(err));
  };

  render() {
    let SingleUserContainer = this.state.users.map(user => (
      <SingleUser key={user.userId}>
        <div>
          <h4>Username</h4>
          <p>{user.username}</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>{user.email}</p>
        </div>
        <div className="delete-container">
          <button className="delete-button">DELETE</button>
        </div>
      </SingleUser>
    ));
    return (
      <DashboardLayout>
        <ContentWrapper>
          <h1>users</h1>
          {this.state.loading ? (
            <img
              src={LoadingSpinner}
              alt="loading spinner
          "
            />
          ) : (
            SingleUserContainer
          )}

          <Link to="/dashboard/adduser" className="add-button">
            <Button>Add new</Button>
          </Link>
        </ContentWrapper>
      </DashboardLayout>
    );
  }
}

export default users;
