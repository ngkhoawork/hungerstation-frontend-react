import styled from 'styled-components';
import media from 'styled-media-query';
import { fuscousGray } from 'utils/colors';

const StyledBanner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 112px;
  height: 57px;
  background-color: ${fuscousGray};
  ${media.lessThan('850px')`
    display: none;
  `};
`;

export default StyledBanner;
