import styled from 'styled-components';
import {
  flex,
  mediaMedium,
  mediaMediumGreater,
  sidePadding,
  sideMargin,
} from 'utils/css/styles';

export const StyledSection = styled.div`
  ${flex({ align: 'flex-start', justify: 'center' })};

  width: 100%;
  border-radius: 8px;
  margin-bottom: 50px;
  padding: 0 0 0;
  position: relative;
  margin-top: 50px;

  &:first-of-type {
    margin-top: 130px;
    margin-bottom: 0;
    padding: 0;
  }

  ${({ hasBackground }) =>
    hasBackground &&
    `
    background-color: #f8f8f8;
  `};

  ${mediaMedium`
    flex-direction: column;

    &:first-of-type {
      margin-top: 80px;
    }

    ${({ hasBackground }) => hasBackground && `padding-bottom: 0;`};
  `};

  ${mediaMediumGreater`
  ${({ hasBackground }) =>
    hasBackground && // eslint-disable-line indent
    `
    `};
  `};

  ${({ css }) => css};
`;

export const LeftSection = styled.div`
  width: 55.5%;
  background: white;
  z-index: 50;
  overflow: visible;
  ${sideMargin('end', '-210px')};

  ${mediaMedium`
    width: 100%;

    ${({ hasBackground }) =>
      hasBackground && // eslint-disable-line indent
      `
      width: calc(100% - 40px);
      margin: 0 20px;
    `};
  `};

  &:nth-of-type(2) {
    border-radius: 0 0 8px 8px;

    ${mediaMedium`width: calc(100% - 40px);`};
  }
`;

export const RightSection = styled.div`
  width: 42.5%;
  z-index: 100;

  ${mediaMedium`
    width: 100%;
    ${sidePadding('start', '4%')};
  `};

  ${({ css }) => css};
`;
