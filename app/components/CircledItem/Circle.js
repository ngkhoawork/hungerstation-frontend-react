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
  ${({ withShadow }) =>
    withShadow && 'box-shadow: -2px 1px 20px 0 rgba(198,58,58,0.15)'};
`;

export default Circle;
