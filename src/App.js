import React, { Component } from 'react';
import '../src/styles/global.sass';
import Navbar from './components/Navbar';
import Button from './components/CustomButton';
import styled from 'styled-components';
import PostCard from './components/PostCard';

const AppWrapper = styled.div``;
const ContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

class App extends Component {
  state = {
    fetchedPosts: [],
    posts: [],
    loading: true,
  };

  componentDidMount = () => {
    this.setState({ loading: true });
    fetch(
      `https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          fetchedPosts: json.articles,
          posts: json.articles,
          loading: false,
        });
        console.log(this.state.posts);
      });
  };

  getOnlyIngridLunden = () => {
    const filteredData = this.state.fetchedPosts.filter(
      post => post.author === 'Ingrid Lunden'
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
        key={post.url}
        title={post.title}
        author={post.author}
        description={post.description}
        imageUrl={post.urlToImage ? post.urlToImage : ''}
      />
    ));

    return (
      <AppWrapper className="App">
        <Navbar />
        <ContentWrapper>
          <div>
            <Button onClick={this.getOnlyIngridLunden}>PC</Button>
            <Button>Mobile</Button>
            <Button>Software</Button>
            <Button>Gamming</Button>
            <Button>Other</Button>
            <Button onClick={this.getAllPosts}>All</Button>
          </div>
          {this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <CardContainer>{CardContainerContent}</CardContainer>
          )}
        </ContentWrapper>
      </AppWrapper>
    );
  }
}

export default App;
