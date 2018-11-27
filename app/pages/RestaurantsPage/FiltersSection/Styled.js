import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';
import { wildSand, lightestGray } from 'utils/css/colors';

const ContentWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
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
  ${flex({ align: 'flex-start', direction: 'column' })};
  width: 100%;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledItem = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};
  height: 42px;
  border-radius: 8px;
  width: 100%;
  padding: 8px;

  ${({ selected }) => selected && `background-color: ${lightestGray};`}
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
