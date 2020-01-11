import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  max-width: 400px;

  padding: 1rem;
  margin: 1rem;

  h3 {
    padding: 0.7rem 0;
  }

  p {
    padding: 0.7rem 0;
    font-size: 0.8rem;
  }

  img {
    max-width: 100%;
    max-height: 200px;
    height: auto;
  }
`;

export default function PostCard(props) {
  return (
    <Card>
      <img src={props.imageUrl} alt="post" />
      <Link to={'/article/' + props.postId}>
        <h3>{props.title}</h3>
      </Link>
      <p>{props.author}</p>
      <p>{props.description.substring(0, 150) + '...'}</p>
    </Card>
  );
}
