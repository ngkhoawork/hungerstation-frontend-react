import styled from 'styled-components';

import { flex, mediaMedium } from 'utils/css/styles';
import { fontFamilyRegular } from 'utils/css/variables';

const StyledPage = styled.div`
  background: ${props => (props.dark ? '#f7f7f7' : '#ffffff')};
  font-family: ${fontFamilyRegular};
  z-index: 100;
  max-width: 1446px;
  width: 100%;
  ${flex({ align: 'center', justify: 'center', direction: 'column' })};

  ${mediaMedium`
    padding: 0 10px;
    max-width: 100%;
  `};
`;

export default StyledPage;
