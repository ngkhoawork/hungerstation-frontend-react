import styled from 'styled-components';

const Circle = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: ${({ width }) => width / 2}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ color }) => color};
  z-index: 0;
`;

export default Circle;
