import React, { Component } from 'react';
import Button from '../components/CustomButton';
import styled from 'styled-components';
import PostCard from '../components/PostCard';
import Layout from '../components/Layout';
import LoadingSpinner from '../images/LoadingSpinner.svg';

const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  .buttonContainer {
    margin: 2.2rem 0;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 6rem;
`;

class home extends Component {
  state = {
    fetchedPosts: [],
    posts: [],
    loading: true,
  };

  componentDidMount = () => {
    this.setState({ loading: true });

    fetch(`https://europe-west1-cdv-cms.cloudfunctions.net/api/posts`)
      .then(res => res.json())
      .then(json => {
        this.setState({ posts: json, loading: false });
        console.log(this.state.posts);
      });
  };

  getOnlyIngridLunden = () => {
    const filteredData = this.state.fetchedPosts.filter(
      post => post.author === 'Ingrid Lunden'
    );

    this.setState({ posts: filteredData });
  };

  getOnlyRichardLawler = () => {
    const filteredData = this.state.fetchedPosts.filter(
      post => post.author === 'Richard Lawler'
    );

    this.setState({ posts: filteredData });
  };

  getAllPosts = () => {
    const allPosts = this.state.fetchedPosts;
    this.setState({ posts: allPosts });
  };

  render() {
    let CardContainerContent = this.state.posts.map(post => (
      <PostCard
        key={post.postId}
        title={post.title}
        author={post.userHandle}
        description={post.body}
        imageUrl={post.postImage ? post.postImage : ''}
        postId={post.postId}
      />
    ));

    return (
      <Layout>
        <ContentWrapper>
          <div className="buttonContainer">
            <Button onClick={this.getOnlyIngridLunden}>PC</Button>
            <Button onClick={this.getOnlyRichardLawler}>Mobile</Button>
            <Button>Software</Button>
            <Button>Gamming</Button>
            <Button>Other</Button>
            <Button onClick={this.getAllPosts}>All</Button>
          </div>
          {this.state.loading ? (
            <h1>
              <img src={LoadingSpinner} alt="loading spinner" />
            </h1>
          ) : (
            <CardContainer>{CardContainerContent}</CardContainer>
          )}
        </ContentWrapper>
      </Layout>
    );
  }
}

export default home;
