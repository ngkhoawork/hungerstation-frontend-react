import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';
import { Link } from 'react-router-dom';

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

const Header = styled.div`
  margin-bottom: 20px;
`;

const StyledFiltersCategoryWrapper = styled.div`
  ${flex({ align: 'flex-start', direction: 'column' })};
  width: 100%;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const StyledItem = styled(Link)`
  text-decoration: none;
  ${flex({ align: 'center', justify: 'space-between' })};
  height: 42px;
  border-radius: 8px;
  width: 100%;
  padding: 8px;

  ${({ selected }) =>
    selected ? 'background-color: rgba(66,66,66,0.05)' : 'transparent'};

  &:last-of-type {
    border: 0;
  }
`;

export { ContentWrapper, StyledFiltersCategoryWrapper, StyledItem, Header };
