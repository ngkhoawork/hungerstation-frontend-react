import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox } from 'utils/styles';

const StyledHeader = styled.div`
  ${flexBox(
    { align: 'center', justify: 'space-between' },
    `padding: 32px 112px;
  flex: 1;
  width: 100%;
  height: 100px;
  font-family: 'HungerStation-Regular', sans-serif;
  z-index: 100;
  `,
  )};
  ${media.lessThan('950px')`
    padding: 32px 80px
  `};
  ${media.lessThan('950px')`
    padding: 32px 10px;
  `};
`;

export default StyledHeader;
