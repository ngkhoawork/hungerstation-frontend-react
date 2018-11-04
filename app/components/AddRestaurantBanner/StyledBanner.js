import styled from 'styled-components';
import { gold } from 'utils/css/colors';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledBanner = styled.div`
  width: 100%;
  padding: 0 112px;
  height: 57px;
  background-color: ${gold};
  max-width: 1446px;
  position: relative;
  ${flexBox({ align: 'center', justify: 'center' })};

  ${mediaMedium`
    display: none;
  `};
`;

export default StyledBanner;
