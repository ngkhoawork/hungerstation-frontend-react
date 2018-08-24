import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox } from 'utils/styles';

const StyledBar = styled.span`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `
    border-radius: 8px;
    margin: 15px 0;
    height: 56px;
    background-color: white;
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
  `};
`;

export default StyledBar;
