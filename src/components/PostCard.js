import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 400px;

  padding: 1rem;
  margin: 1rem;

  h3 {
    padding: 1rem 0;
  }

  p {
    padding: 1rem 0;
    font-size: 0.8rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function PostCard(props) {
  return (
    <Card>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.description.substring(0, 150) + '...'}</p>
      <img src={props.imageUrl} alt="post" />
    </Card>
  );
}
