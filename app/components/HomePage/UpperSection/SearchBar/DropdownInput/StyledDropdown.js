import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox } from 'utils/styles';

const StyledDropdown = styled.span`
  ${flexBox(
    { align: 'center', justify: 'flex-start' },
    `
      font-family: 'HungerStation-Light', sans-serif;
      height: 100%;
      width: 35%;
      cursor: pointer;
      &:first-of-type {
        margin-left: 20px;
      }
    `,
  )};
  ${media.lessThan('850px')`
    height: 56px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    padding: 0 20px;
    width: 100%;
    margin-bottom: 20px;
    &:first-of-type {
      margin-left: 0;
    }
    background-color: white;
  `};
`;

export default StyledDropdown;
