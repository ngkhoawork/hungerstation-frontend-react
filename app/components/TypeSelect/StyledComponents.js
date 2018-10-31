import styled, { css } from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import { fuscousGray, silverChalice, alabaster } from 'utils/css/colors';
import { borderRadius } from 'utils/css/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;

  ${mediaMedium`flex-direction: row;`};

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

  ${mediaMedium`margin-right: 10px;`};

  ${({ active }) =>
    active &&
    `
    background-color: ${alabaster};
    border-radius: ${borderRadius};
  `};

  ${({ style }) => style && css(style)};
`;

export const DisabledOverlay = styled.div`
  background-color: ${alabaster};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
