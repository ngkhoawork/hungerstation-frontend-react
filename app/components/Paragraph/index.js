import styled from 'styled-components';

import { fontFamilyLight, fontFamilyRegular } from 'utils/css/variables';
import { fuscousGray } from 'utils/css/colors';

const StyledParagraph = styled.p`
  font-family: ${({ light }) => (light ? fontFamilyLight : fontFamilyRegular)};
  font-size: ${({ size }) => (size ? `${size}px` : '14px')};
  color: ${({ color }) => color || fuscousGray};
  margin: ${({ margin }) => margin || 0};
`;

export default StyledParagraph;
