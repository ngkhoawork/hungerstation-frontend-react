import styled from 'styled-components';

import { fontFamilyLight } from 'utils/css/variables';
import { ironsideGray } from 'utils/css/colors';

const Text = styled.p`
  font-size: 14px;
  font-family: ${fontFamilyLight};
  color: ${ironsideGray};
  opacity: 0.6;
`;

export default Text;
