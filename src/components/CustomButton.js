import React from 'react';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';

const Button = styled.button`
  color: #fff;
  background-color: ${StyleConstants.MAIN_COLOR};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 0.6rem;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export default function CustomButton(props) {
  return <Button onClick={props.onClick}>{props.children}</Button>;
}
