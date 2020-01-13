import React, { Component } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import CalendarIcon from '../images/icons/calendar.svg';
import AuthorIcon from '../images/icons/author.svg';

const ContentWrapper = styled.div`
  display: grid;
  justify-content: center;
  padding: 4rem 0 10rem 0;

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
      align-items: center;

      span {
        font-size: 0.6rem;
        display: grid;
        grid-template-columns: 20px 1fr;
        align-items: center;

        .info-icon {
          padding: 0;
          height: 15px;
        }
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
                    <img
                      src={CalendarIcon}
                      alt="calendar icon"
                      className="info-icon"
                    />
                    Created at: {this.state.posts[0].createdAt.substring(0, 10)}
                  </span>
                  <span>
                    <img
                      src={AuthorIcon}
                      alt="author icon"
                      className="info-icon"
                    />
                    Author: {this.state.posts[0].userHandle}
                  </span>
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
