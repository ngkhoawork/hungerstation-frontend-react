import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import { wildSand } from 'utils/css/colors';
import { Link } from 'react-router-dom';

const ContentWrapper = styled.div`
  width: 232px;
  overflow-y: auto;
  position: relative;
  padding: 7px 24px 24px;
  ${flex({ align: 'flex-start', direction: 'column' })};

  ${mediaMedium`
    width: 100%;
    padding: 30px 24px 24px;
    height: calc(100% - 176px);
    box-shadow: 0 0 35px 5px rgba(183, 157, 157, 0.09);
    border-bottom: 1px solid ${wildSand};
  `};

  ${({ css }) => css};
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
