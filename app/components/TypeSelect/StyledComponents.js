import styled, { css } from 'styled-components';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { fuscousGray, silverChalice, alabaster } from 'utils/css/colors';
import { borderRadius } from 'utils/css/variables';

export const Container = styled.div`
  width: 100%;
  ${flex({ direction: 'column' })};

  ${mediaMedium`
    ${flex({ direction: 'row' }, false)};
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 0;
    }
  `};

  ${({ style }) => style && css(style)};
`;

export const Type = styled.span`
  ${flex({ justify: 'space-between', align: 'center' })};
  padding: 7px;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${silverChalice};
  position: relative;
  font-size: 14px;
  cursor: pointer;
  line-height: 1;

  ${mediaMediumGreater`
    overflow: hidden;
  `};

  ${mediaMedium`
    margin-right: 10px;
    white-space: nowrap;
  `};

  ${({ active }) =>
    active &&
    `
    background-color: ${alabaster};
    border-radius: ${borderRadius};
  `};

  ${({ style }) => style && css(style)};
`;

export const Name = styled.span`
  ${({ active }) =>
    active &&
    `
    color: ${fuscousGray};
  `};

  ${({ active }) =>
    active &&
    mediaMedium &&
    `
    margin-right: 10px;
  `};
`;
