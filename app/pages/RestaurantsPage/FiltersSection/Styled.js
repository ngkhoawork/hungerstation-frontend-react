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

const StyledFiltersCategoryWrapper = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
    margin-bottom: 24px;
    &:last-of-type {
      margin-bottom: 0;
    }
  `,
  )};
`;

const StyledItem = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    height: 42px;
    border-radius: 8px;
    width: 100%;
    padding: 8px;
  `,
  )};
  ${({ selected }) => selected && `background-color: rgba(66,66,66,0.05);`}
  ${({ isPreviousSelected }) =>
    isPreviousSelected &&
    `border-top-left-radius: 0px;border-top-right-radius: 0px;`}
  ${({ isNextSelected }) =>
    isNextSelected &&
    `border-bottom-left-radius: 0px;border-bottom-right-radius: 0px;`}

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
  StyledFiltersCategoryWrapper,
  StyledItem,
};
