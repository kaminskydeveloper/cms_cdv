import React, { Component } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';
import * as StyleConstants from '../../styles/StyleConstants';
import SingleDraft from '../../components/SingleDraft';
import LoadingSpinner from '../../images/LoadingSpinner.svg';
import axios from 'axios';

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
    max-height: 100vh;
  }

  .second-column {
    display: grid;
    align-items: start;
    margin-top: 3rem;
    padding: 0 4rem;
  }
`;

const DraftForm = styled.form`
  display: grid;
  grid-gap: 1.4rem;
  width: 300px;

  input,
  textarea {
    padding: 0.7rem 1rem;
    background-color: ${StyleConstants.PURPLE_LIGHT};
    border: none;
    border-radius: 4px;
    width: 300px;
  }
`;

const Button = styled.button`
  width: 100px;
  border: none;
  padding: 0.7rem;
  background-color: ${StyleConstants.MAIN_COLOR};
  color: white;
  font-weight: 600;
  justify-self: end;

  &:hover {
    cursor: pointer;
    background-color: ${StyleConstants.MAIN_COLOR_LIGHTER};
    transition: background-color 0.6s ease-out;
  }
`;

class dashboard extends Component {
  state = {
    formDraftTitle: '',
    formDraftNote: '',
    drafts: [],
    credentials: {},
    posts: [],
    users: [],
    loggedUser: '',
    loading: true,
  };

  componentDidMount = () => {
    const config = {
      headers: { Authorization: `${localStorage.getItem('FBIdToken')}` },
    };

    axios
      .get('/getDashboardData', config)
      .then(res => {
        this.setState({
          posts: res.data.postsData,
          users: res.data.users,
          credentials: res.data.credentials,
          loggedUser: res.data.credentials.username,
          drafts: res.data.drafts,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.formDraftTitle && this.state.formDraftNote) {
      let data = {
        title: this.state.formDraftTitle,
        body: this.state.formDraftNote,
      };
      axios
        .post('/postDraft', data, {
          headers: {
            Authorization: `${localStorage.getItem('FBIdToken')}`,
            'Content-Type': 'application/json',
          },
        })
        .then(res => {
          this.setState({
            drafts: [
              {
                title: this.state.formDraftTitle,
                body: this.state.formDraftNote,
                draftId: res.data.draftId,
              },
              ...this.state.drafts,
            ],
          });
          this.setState({ formDraftTitle: '', formDraftNote: '' });
        })
        .catch(err => console.log(err));
    } else {
      alert('Cannot be empty');
    }
  };

  deleteSingleDraft = draftId => {
    const config = {
      headers: { Authorization: `${localStorage.getItem('FBIdToken')}` },
    };
    axios
      .delete(`/deleteDraft/${draftId}`, config)
      .then(res => {
        const refreshedDrafts = this.state.drafts.filter(
          draft => draft.draftId !== draftId
        );
        this.setState({ drafts: refreshedDrafts });
      })
      .catch(err => console.log(err));
  };

  render() {
    let drafts = this.state.drafts.map(draft => (
      <SingleDraft
        deleteSingleDraft={this.deleteSingleDraft}
        key={draft.draftId}
        draftId={draft.draftId}
      >
        <h4>{draft.title}</h4>
        <p>{draft.body}</p>
      </SingleDraft>
    ));
    return (
      <DashboardLayout>
        <ContentWrapper>
          <div className="first-column">
            <div>
              <h2>Dashboard</h2>
              <p>
                You are logged in as: <b>{this.state.loggedUser}</b>
              </p>
              <p>
                Role:{' '}
                <b>{this.state.credentials.admin ? 'Admin' : 'Redactor'}</b>
              </p>
            </div>
            <div>
              <h3>Summary</h3>
              <p>Articles already created: {this.state.posts.length}</p>
              {this.state.credentials.admin && (
                <p>Users already created: {this.state.users.length}</p>
              )}
            </div>
            <div>
              <DraftForm onSubmit={this.handleSubmit}>
                <h3>Quick draft</h3>
                <input
                  type="text"
                  name="formDraftTitle"
                  placeholder="Title"
                  value={this.state.formDraftTitle}
                  onChange={this.handleChange}
                />
                <textarea
                  name="formDraftNote"
                  placeholder="Note"
                  rows="8"
                  value={this.state.formDraftNote}
                  onChange={this.handleChange}
                />
                <Button type="submit">ADD</Button>
              </DraftForm>
            </div>
          </div>
          <div className="second-column">
            <h2>Drafts</h2>
            {this.state.loading ? (
              <img src={LoadingSpinner} alt="loading spinner" />
            ) : (
              drafts
            )}
          </div>
        </ContentWrapper>
      </DashboardLayout>
    );
  }
}

export default dashboard;
