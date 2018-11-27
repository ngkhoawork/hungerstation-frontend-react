import styled from 'styled-components';
import { gold } from 'utils/css/colors';
import { flex, mediaMedium } from 'utils/css/styles';
import { maxPageWidth } from 'utils/css/variables';

const StyledBanner = styled.div`
  width: 100%;
  padding: 0 112px;
  height: 57px;
  background-color: ${gold};
  max-width: ${maxPageWidth};
  position: relative;
  ${flex({ align: 'center', justify: 'center' })};

  ${mediaMedium`
    display: none;
  `};
`;

export default StyledBanner;
