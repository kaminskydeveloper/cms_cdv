import React, { Component } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';
import * as StyleConstants from '../../styles/StyleConstants';
import Button from '../../components/CustomButton';
import axios from 'axios';

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

  .add-success-paragraph {
    color: green;
    font-weight: 600;
  }
`;

class addArticle extends Component {
  state = {
    title: '',
    content: '',
    imageUrl: '',
    userHandle: '',
    addSuccess: false,
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
    // fetch('https://europe-west1-cdv-cms.cloudfunctions.net/api/post', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: {
    //     title: this.state.title,
    //     body: this.state.content,
    //     userHandle: this.state.userHandle,
    //     postImage: this.state.imageUrl,
    //   },
    // }).catch(err => console.log(err));

    axios
      .post('https://europe-west1-cdv-cms.cloudfunctions.net/api/post', {
        title: this.state.title,
        body: this.state.content,
        userHandle: this.state.userHandle,
        postImage: this.state.imageUrl,
      })
      .then(res => {
        console.log(res);
        this.setState({
          title: '',
          content: '',
          imageUrl: '',
          userHandle: '',
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
            <p>Title</p>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <p>Content</p>
            <textarea
              name="content"
              rows="17"
              onChange={this.handleChange}
              value={this.state.content}
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
                placeholder="image url"
                onChange={this.handleChange}
                value={this.state.imageUrl}
              />
              <input
                type="text"
                name="userHandle"
                placeholder="user handle"
                onChange={this.handleChange}
                value={this.state.userHandle}
              />
              {/* <input
                type="file"
                name="userImage"
                placeholder="user handle"
                onChange={this.handleChange}
              /> */}
              <Button>ADD ARTICLE</Button>
              {this.state.addSuccess && (
                <p className="add-success-paragraph">
                  Article added successfully
                </p>
              )}
            </div>
          </Form>
        </ContentWrapper>
      </DashboardLayout>
    );
  }
}

export default addArticle;
