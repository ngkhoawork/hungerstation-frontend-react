import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox } from 'utils/css/styles';

export const searchBarHeight = '56px';

const StyledBar = styled.span`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    border-radius: 8px;
    margin: 15px 0;
    height: ${searchBarHeight};
    background-color: white;
    width: 808px;
  `,
  )};
  ${media.lessThan('850px')`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    border: 0;
    width: 100%;
    align-self: center;
    background-color: transparent;
  `};
`;

export default StyledBar;
