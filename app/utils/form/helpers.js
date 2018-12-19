import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  border-radius: 8px;
  background-color: rgba(252, 146, 135, 0.1);
  color: #ff5f4f;
  padding: 0.5em 1em;
  margin: 2em 0;
  font-weight: 200;
  font-size: 14px;

  > span {
    display: inline-block;
    line-height: 1.3em;
    vertical-align: bottom;
  }
`;

export const printErrors = errors => {
  if (!errors) return null;

  if (typeof errors === 'string') {
    return (
      <StyledError>
        <span>{errors}</span>
      </StyledError>
    );
  }

  if (errors.get('error_details')) {
    return (
      <StyledError>
        {errors
          .get('error_details')
          .entrySeq()
          .map(([key, value]) => <p key={key}>{value}</p>)}
      </StyledError>
    );
  }

  if (errors.get('message')) {
    let errorMessage;
    try {
      errorMessage = JSON.parse(errors.get('message')).map(e => <p>{e}</p>);
    } catch (e) {
      errorMessage = errors.get('message');
    }
    return <StyledError>{errorMessage}</StyledError>;
  }

  return <StyledError>Error occurred</StyledError>;
};
