import styled from 'styled-components';

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
`;

export default TextItem;
