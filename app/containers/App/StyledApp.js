import styled from 'styled-components';

import { fontFamilyRegular } from 'utils/css/variables';
import { flex } from 'utils/css/styles';
import { alabaster } from 'utils/css/colors';

const StyledApp = styled.div`
  ${flex({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};
  background-color: ${({ dark }) => (dark ? alabaster : 'white')};
  font-family: ${fontFamilyRegular};
`;

export default StyledApp;
