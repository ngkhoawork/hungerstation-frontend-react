import styled, { css } from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import {
  borderRadius,
  fontFamilyLight,
  zIndexDropdown,
} from 'utils/css/variables';
import {
  silverChalice,
  lightGray,
  fuscousGray,
  alabaster,
} from 'utils/css/colors';

export const Container = styled.div`
  position: relative;
  font-family: ${fontFamilyLight};
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline-block')};
`;

export const List = styled.ul`
  display: none;
  position: absolute;
  top: 26px;
  z-index: ${zIndexDropdown};
  background: white;
  border: solid 1px ${alabaster};
  border-radius: 4px;
  padding: 5px 15px;
  max-height: 100px;
  overflow: auto;
  text-align: center;

  ${({ isBlock }) =>
    isBlock &&
    css`
      width: 100%;
    `};

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;
    `};

  ${mediaMedium`max-height: 180px;`};
`;

export const Item = styled.li`
  display: block;
  padding: 5px;
  color: ${silverChalice};
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;

  :hover {
    color: ${fuscousGray};
  }
`;

export const SelectedItem = styled.div`
  display: inline-block;
  cursor: pointer;
  background-color: ${alabaster};
  border: solid 1px ${lightGray};
  border-radius: ${borderRadius};
  padding: 6px 12px;

  ${({ isBlock }) =>
    isBlock &&
    css`
      ${flex({ justify: 'space-between', align: 'center' })};
    `};
`;

export const SelectedItemValue = styled.span`
  margin-right: 10px;
`;
