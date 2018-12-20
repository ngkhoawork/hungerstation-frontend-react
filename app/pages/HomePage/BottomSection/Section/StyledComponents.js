import styled from 'styled-components';
import {
  flex,
  mediaMedium,
  mediaMediumGreater,
  sidePadding,
} from 'utils/css/styles';
import { alabaster } from 'utils/css/colors';

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
    background-color: ${alabaster};
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
  width: 41%;
  background: white;
  z-index: 50;
  overflow: visible;

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
  ${({ css }) => css};
`;

export const RightSection = styled.div`
  width: 44%;
  z-index: 100;
  align-self: flex-end;

  ${mediaMedium`
    width: 100%;
    ${sidePadding('start', '7%')};
  `};

  ${({ css }) => css};
`;
