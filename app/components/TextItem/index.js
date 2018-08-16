import styled from 'styled-components';

const TextItem = styled.p`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight || 100};
  text-transform: ${({ transform }) => transform};
  margin: 0;
  margin-right: 10px;
  cursor: pointer;
  letter-spacing: 0.5px;
  font-family: 'HungerStation-${({ fontFamily }) =>
    fontFamily === 'regular' ? 'Regular' : 'Light'}',
    sans-serif;
`;

export default TextItem;
