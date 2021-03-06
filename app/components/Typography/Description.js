import styled, { css } from 'styled-components';
import { ironsideGray } from 'utils/css/colors';
import { fontFamilyLight } from 'utils/css/variables';

const Description = styled.div`
  color: ${ironsideGray};
  font-family: ${fontFamilyLight};
  font-size: 14px;
  letter-spacing: 0.44px;
  line-height: 16px;
  margin: 10px 0;

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

export default Description;
