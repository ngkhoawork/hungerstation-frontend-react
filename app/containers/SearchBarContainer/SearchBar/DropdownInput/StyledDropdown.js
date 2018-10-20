import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox } from 'utils/css/styles';
import { searchBarHeight } from '../StyledComponents';

const StyledDropdown = styled.span`
  ${flexBox(
    { align: 'center', justify: 'flex-start' },
    `
      height: 100%;
      width: 100%;
      cursor: pointer;
    `,
  )};
  ${media.lessThan('850px')`
    height: ${searchBarHeight};
    border: 1px solid lightgrey;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 20px;
    &:first-of-type {
      margin-left: 0;
    }
    background-color: white;
  `};
`;

export default StyledDropdown;
