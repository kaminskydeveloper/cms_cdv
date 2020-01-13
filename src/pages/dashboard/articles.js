import React, { Component } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import styled from 'styled-components';
import * as StyleConstants from '../../styles/StyleConstants';
import { Link } from 'react-router-dom';
import Button from '../../components/CustomButton';
import axios from 'axios';

const ContentWrapper = styled.div`
  color: ${StyleConstants.MAIN_TEXT};
  padding: 3rem 10rem;
  display: grid;

  h2 {
    margin-bottom: 3rem;
  }

  .add-button {
    justify-self: end;
  }
`;

const SingleArticle = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  padding: 2rem;
  margin: 1rem auto;
  background-color: ${StyleConstants.PURPLE_LIGHT};
  border-radius: 5px;

  h4 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.7rem;
  }

  .delete-container,
  .edit-container {
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

  .edit-container {
    .edit-button {
      border: none;
      background-color: ${StyleConstants.MAIN_COLOR};
      color: white;
      padding: 0.5rem 0.7rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

class articles extends Component {
  state = {
    posts: [],
    loading: true,
    deleteSuccess: false,
  };

  componentDidMount = () => {
    this.setState({ loading: true });

    fetch(`https://europe-west1-cdv-cms.cloudfunctions.net/api/posts`)
      .then(res => res.json())
      .then(json => {
        this.setState({ posts: json, loading: false });
        console.log(this.state.posts);
        console.log(this.state.posts[0].postId);
      });
  };

  deleteSinglePost = postId => {
    axios
      .delete(
        `https://europe-west1-cdv-cms.cloudfunctions.net/api/post/${postId}`
      )
      .then(res => {
        const refreshedPosts = this.state.posts.filter(
          post => post.postId !== postId
        );
        this.setState({ posts: refreshedPosts });
      })
      .catch(err => console.log(err));
  };

  editSinglePost = postId => {
    console.log(postId);
    const refreshedPosts = this.state.posts.filter(
      post => post.postId !== postId
    );

    console.log(refreshedPosts);
  };

  render() {
    let CardContainerContent = this.state.posts.map(post => (
      <SingleArticle key={post.postId}>
        <div>
          <h4>Title</h4>
          <p>{post.title}</p>
        </div>
        <div>
          <h4>Date</h4>
          <p>{post.createdAt.substring(0, 10)}</p>
        </div>
        <div>
          <h4>Author</h4>
          <p>{post.userHandle}</p>
        </div>
        <div className="edit-container">
          <button
            className="edit-button"
            onClick={() => this.editSinglePost(post.postId)}
          >
            EDIT
          </button>
        </div>
        <div className="delete-container">
          <button
            className="delete-button"
            onClick={() => this.deleteSinglePost(post.postId)}
          >
            DELETE
          </button>
        </div>
      </SingleArticle>
    ));

    return (
      <DashboardLayout>
        <ContentWrapper>
          <h2>Articles</h2>
          <div>{CardContainerContent}</div>
          <Link to="/dashboard/addarticle" className="add-button">
            <Button>Add new</Button>
          </Link>
        </ContentWrapper>
      </DashboardLayout>
    );
  }
}

export default articles;
