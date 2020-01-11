import React, { Component } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';
import TrashImage from '../images/icons/trash.svg';
import SingleDraft from '../components/SingleDraft';

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
    drafts: [
      {
        id: 1,
        title: 'Title',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
      },
      {
        id: 2,
        title: 'Title',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
      },
      {
        id: 3,
        title: 'Title',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...',
      },
    ],
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
      this.setState({
        drafts: [
          ...this.state.drafts,
          { title: this.state.formDraftTitle, body: this.state.formDraftNote },
        ],
      });

      this.setState({ formDraftTitle: '', formDraftNote: '' });
    } else {
      alert('Cannot be empty');
    }
  };

  deleteSingleDraft = draft => {
    const data = this.state.drafts.filter(i => i.id !== draft.id);
    this.setState({ drafts: data });
    alert('hi');
  };

  render() {
    let drafts = this.state.drafts.map(draft => (
      <SingleDraft deleteSingleDraft={this.deleteSingleDraft} key={draft.id}>
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
              <p>You are logged in as: User</p>
            </div>
            <div>
              <h3>Summary</h3>
              <p>Articles already created: 6</p>
              <p>Users already created: 2</p>
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
            {drafts}
          </div>
        </ContentWrapper>
      </DashboardLayout>
    );
  }
}

export default dashboard;
