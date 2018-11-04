import styled, { css } from 'styled-components';
import { fuscousGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';

const Title = styled.div`
  color: ${fuscousGray};
  font-family: ${fontFamilyRegular};
  font-size: ${({ fontSize }) => fontSize || 24}px;
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 0.33}px;
  line-height: 1;

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

export default Title;
