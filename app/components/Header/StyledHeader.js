import styled from 'styled-components';
import { flexBox, mediaSmall, mediaMedium, mediaLess } from 'utils/css/styles';

const StyledHeader = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `padding: 32px 112px;
  flex: 1;
  width: 100%;
  height: 100px;
  font-family: 'HungerStation-Regular', sans-serif;
  z-index: 100;
  max-width: 1446px;
  `,
  )};
  ${mediaLess('950px')`
    padding: 32px 80px
  `};
  ${mediaMedium`
    padding: 10px 20px;
  `};
  ${mediaSmall`
    padding: 10px;
  `};
`;

export default StyledHeader;
