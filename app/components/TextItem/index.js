import styled from 'styled-components';
import { mediaMedium } from 'utils/css/styles';

const TextItem = styled.span`
  display: inline-block;
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight || 100};
  text-transform: ${({ transform }) => transform};
  margin: ${({ margin }) => margin || 0};
  cursor: pointer;
  font-family: ${({ fontFamily }) =>
    `HungerStation-${
      fontFamily !== 'regular' ? 'Light' : 'Regular'
    }, sans-serif`};

  ${mediaMedium`
    width: 330px;
  `};
`;

export default TextItem;
