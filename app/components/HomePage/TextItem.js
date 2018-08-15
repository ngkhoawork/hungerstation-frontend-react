import styled from 'styled-components';

const TextItem = styled.p`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  text-transform: ${({ transform }) => transform};
  margin: 0;
  margin-right: 10px;
  cursor: pointer;
`;

export default TextItem;
