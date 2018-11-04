import styled, { css } from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import { fuscousGray, silverChalice, alabaster } from 'utils/css/colors';
import { borderRadius } from 'utils/css/variables';

export const Container = styled.div`
  width: 100%;
  ${flex({ direction: 'column', wrap: 'wrap' })};

  ${mediaMedium`
    ${flex({ direction: 'row' }, false)};
  `};

  ${({ style }) => style && css(style)};
`;

export const Type = styled.span`
  ${flex({ justify: 'space-between', align: 'center' })};
  padding: 7px;
  margin-bottom: 10px;
  text-decoration: none;
  color: ${silverChalice};
  overflow: hidden;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  line-height: 1;

  ${mediaMedium`
    margin-right: 10px;
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
