import React, { Component } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import dayjs from 'dayjs';

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  padding: 2rem;

  .article-wrapper {
    max-width: 600px;

    img {
      max-width: 100%;
      padding: 1rem 0;
    }

    p {
      font-size: 0.7rem;
      line-height: 1rem;
    }

    .create-info {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      span {
        font-size: 0.6rem;
      }
    }
  }
`;

export default class Article extends Component {
  state = {
    posts: [],
    loading: true,
  };

  componentDidMount = () => {
    this.setState({ loading: true });

    fetch(`https://europe-west1-cdv-cms.cloudfunctions.net/api/posts`)
      .then(res => res.json())
      .then(json => {
        const data = json.filter(
          post => post.postId === this.props.match.params.id
        );
        this.setState({ posts: data, loading: false });
      });
  };
  render() {
    return (
      <Layout>
        <ContentWrapper>
          {!this.state.loading ? (
            this.state.posts.length > 0 ? (
              <div className="article-wrapper">
                <h3>{this.state.posts[0].title}</h3>
                <div className="create-info">
                  <span>
                    Created at: {this.state.posts[0].createdAt.substring(0, 10)}
                  </span>
                  <span>Author: {this.state.posts[0].userHandle}</span>
                </div>
                <img src={this.state.posts[0].postImage} alt="" />
                <p>{this.state.posts[0].body}</p>
              </div>
            ) : (
              <h1>0 posts found with this post ID</h1>
            )
          ) : (
            <h1>Loading</h1>
          )}
        </ContentWrapper>
      </Layout>
    );
  }
}
