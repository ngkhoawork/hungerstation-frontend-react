import styled from 'styled-components';
import {
  mediaLess,
  mediaGreater,
  getDisplayProp,
  flexBox,
} from 'utils/css/styles';
import { alto, wildSand } from 'utils/css/colors';

const ActionsWrapper = styled.div`
  ${flexBox({
    align: 'center',
    justify: 'space-between',
    direction: 'column',
  })};
  min-height: 120px;
  padding: 20px 0;
  border-top: 1px solid ${alto} ${mediaGreater(1000)`
    display: none;
  `} ${mediaLess(1000)`
    ${({ isModalOpened }) => getDisplayProp(!isModalOpened)};
  `};
`;

const ButtonWrapper = styled.div`
  height: 45px;
  width: 100%;
  ${mediaGreater(1000)`
    display: none;
  `} ${mediaLess(1000)`
    ${({ isModalOpened }) => getDisplayProp(isModalOpened)};
  `};
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const StyledFiltersContainer = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
  `,
  )};
`;

const StyledItem = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    width: 100%;
    padding: 15px 0;
  `,
  )};
  border-bottom: ${({ hasBorder }) =>
    hasBorder ? `1px solid ${wildSand}` : 'none'};
  &:last-of-type {
    border: 0;
  }
`;

export {
  ActionsWrapper,
  ButtonWrapper,
  ContentWrapper,
  StyledFiltersContainer,
  StyledItem,
};
