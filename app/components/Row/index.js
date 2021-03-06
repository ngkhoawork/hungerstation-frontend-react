import styled from 'styled-components';
export default styled.div`
  display: flex;
  ${({ maxWidth }) => maxWidth && `width: 100%;`};
  ${({ justify }) => justify && `justify-content: ${justify};`};
  ${({ align }) => align && `align-items: ${align};`};

  ${({ css }) => css};
`;
