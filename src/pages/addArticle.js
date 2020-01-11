import React, { Component } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';
import Button from '../components/CustomButton';

const ContentWrapper = styled.div`
  color: ${StyleConstants.MAIN_TEXT};
  padding: 3rem;

  h2 {
    margin-bottom: 3rem;
  }
`;

const Form = styled.form`
  display: grid;
  margin: 0 auto;
  width: 80%;

  input,
  textarea {
    background-color: ${StyleConstants.PURPLE_LIGHT};
    border: none;
    padding: 1rem;
  }

  select {
    width: 100px;
    background-color: ${StyleConstants.PURPLE_LIGHT};
    border: none;
    margin-top: 1rem;
    padding: 0.7rem;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  p {
    margin: 1rem 0;
  }
`;

class addArticle extends Component {
  state = {
    title: '',
    content: '',
    imageUrl: '',
    userHandle: '',
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
    fetch('https://europe-west1-cdv-cms.cloudfunctions.net/api/post', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: {
        title: this.state.title,
        body: this.state.content,
        userHandle: this.state.userHandle,
        postImage: this.state.imageUrl,
      },
    });
  };
  render() {
    return (
      <DashboardLayout>
        <ContentWrapper>
          <h2>Add article</h2>
          <Form onSubmit={this.handleSubmit}>
            <p>Title</p>
            <input
              type="text"
              name="title"
              id=""
              onChange={this.handleChange}
            />
            <p>Content</p>
            <textarea
              name="content"
              id=""
              rows="17"
              onChange={this.handleChange}
            />
            {/* <div className="category-container">
              <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <input type="checkbox" name="featured" value="featured" /> Mark
              featured
            </div> */}

            <div className="buttons-container">
              {/* <Button>ADD HERO IMAGE</Button> */}
              <input
                type="text"
                name="imageUrl"
                id=""
                placeholder="image url"
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="userHandle"
                id=""
                placeholder="user handle"
                onChange={this.handleChange}
              />
              <Button>ADD ARTICLE</Button>
            </div>
          </Form>
        </ContentWrapper>
      </DashboardLayout>
    );
  }
}

export default addArticle;
