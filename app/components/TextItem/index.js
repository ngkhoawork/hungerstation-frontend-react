import styled from 'styled-components';

const TextItem = styled.span`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight || 100};
  text-transform: ${({ transform }) => transform};
  margin: ${({ margin }) => margin || 0};
  cursor: pointer;
  font-family: ${props =>
    `${
      props.fontFamily === 'regular'
        ? 'HungerStation-Light'
        : 'HungerStation-Regular'
    }, sans-serif`};
`;

export default TextItem;
