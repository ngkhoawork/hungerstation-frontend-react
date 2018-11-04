import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';

const ContentWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  ${mediaLess(600)`
  height: calc(100% - 176px);
  border-bottom: 1px solid ${wildSand};
  `};
`;

const StyledFiltersCategoryWrapper = styled.div`
  ${flexBox({ align: 'flex-start', direction: 'column' })};
  width: 100%;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledItem = styled.div`
  ${flexBox({ align: 'center', justify: 'space-between' })};
  height: 42px;
  border-radius: 8px;
  width: 100%;
  padding: 8px;

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

export { ContentWrapper, StyledFiltersCategoryWrapper, StyledItem };
