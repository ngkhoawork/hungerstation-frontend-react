import styled from 'styled-components';

import { fontFamilyRegular } from 'utils/css/variables';
import { fuscousGray } from 'utils/css/colors';

const Text = styled.p`
  color: ${fuscousGray};
  font-size: ${({ fontSize }) => fontSize}px;
  font-family: ${fontFamilyRegular};
  margin: 0;
`;

export default Text;
