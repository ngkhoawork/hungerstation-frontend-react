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

  return (
    <div>
      {typeof error === 'string' ? (
        <StyledError>
          <span>{errors}</span>
        </StyledError>
      ) : (
        errors.map((err, i) => (
          /* eslint-disable-next-line react/no-array-index-key */
          <StyledError key={`form-error${i}`}>
            <span>{err.get('message')}</span>
          </StyledError>
        ))
      )}
    </div>
  );
};
