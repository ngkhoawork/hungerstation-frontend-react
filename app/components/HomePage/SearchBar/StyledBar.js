import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox } from 'utils/styles';

const StyledBar = styled.span`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    border: 1px solid lightgrey;
    border-radius: 8px;
    margin: 15px 0;
    height: 56px;
  `,
  )};
  ${media.lessThan('850px')`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    border: 0;
    width: 80%;
    align-self: center;
  `};
`;

export default StyledBar;
