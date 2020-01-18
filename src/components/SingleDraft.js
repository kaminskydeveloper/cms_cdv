import React from 'react';
import styled from 'styled-components';
import * as StyleConstants from '../styles/StyleConstants';
import TrashImage from '../images/icons/trash.svg';

const DraftContentWrapper = styled.div`
  background-color: ${StyleConstants.PURPLE_LIGHT};
  padding: 1rem;
  border-radius: 4px;
  max-width: 400px;
  height: auto;

  .children-container {
    max-width: 400px;
    
    
    p{
      word-break: break-all;
    }
  }
}
`;

const DraftWrapper = styled.div`
  position: relative;
  margin: 1rem 0;

  .trash-container {
    position: absolute;
    top: 50%;
    left: 105%;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default function SingleDraft({ children }, props) {
  return (
    <DraftWrapper>
      <DraftContentWrapper>
        <div className="children-container">{children}</div>
        <div className="trash-container">
          <img src={TrashImage} alt="trash" onClick={props.deleteSingleDraft} />
        </div>
      </DraftContentWrapper>
    </DraftWrapper>
  );
}
