import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  border-radius: 8px;
  background-color: rgba(252, 146, 135, 0.1);
  // box-shadow: 0 9px 12px -3px rgba(134, 16, 16, 0.16);
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

  return (
    <div>
      {typeof error === 'string' ? (
        <StyledError>
          <span>{errors}</span>
        </StyledError>
      ) : (
        errors.map(err => (
          <StyledError>
            <span>{err.get('message')}</span>
          </StyledError>
        ))
      )}
    </div>
  );
};
