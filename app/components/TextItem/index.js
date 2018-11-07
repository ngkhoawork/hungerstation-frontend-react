import styled from 'styled-components';

import { fontFamilyRegular, fontFamilyLight } from 'utils/css/variables';
import { mediaMedium } from 'utils/css/styles';

const TextItem = styled.span`
  display: ${'display' || 'inline-block '};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight || 100};
  text-transform: ${({ transform }) => transform};
  margin: ${({ margin }) => margin || 0};
  cursor: pointer;
  font-family: ${({ fontFamily }) =>
    fontFamily === 'regular' ? fontFamilyRegular : fontFamilyLight};

  ${mediaMedium`
    width: 100%;
    text-align: center;
  `};
`;

export default TextItem;
