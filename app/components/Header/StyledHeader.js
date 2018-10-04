import styled from 'styled-components';
import { gold } from 'utils/css/colors';
import { flexBox, mediaSmall, mediaMedium, mediaLess } from 'utils/css/styles';

const StyledHeader = styled.div`
  ${props => props.gold && `background-color: ${gold};`};

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

export const StyledBrandLogo = styled.img`
  filter: drop-shadow(0 0 3px #e4e8e6);
`;
export default StyledHeader;
