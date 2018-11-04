import styled from 'styled-components';

import { fontFamilyLight } from 'utils/css/variables';
import { ironsideGray } from 'utils/css/colors';

const Description = styled.p`
  color: ${ironsideGray};
  font-size: 12px;
  font-family: ${fontFamilyLight};
  letter-spacing: 0.46px;
  opacity: 0.6;
  margin: 0;

  a {
    color: ${ironsideGray};
    text-decoration: none;
  }
`;

export default Description;
