import styled from 'styled-components';
import media from 'styled-media-query';
import { flex } from 'utils/css/styles';
import { searchBarHeight } from '../StyledComponents';

const StyledDropdown = styled.span`
  height: 100%;
  width: 100%;
  cursor: pointer;
  ${flex({ align: 'center', justify: 'flex-start' })};

  ${media.lessThan('850px')`
    height: ${searchBarHeight};
    border: 1px solid lightgrey;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 20px;
    background-color: white;

    &:first-of-type {
      margin-left: 0;
    }
  `};
`;

export default StyledDropdown;
