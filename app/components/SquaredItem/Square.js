import styled from 'styled-components';

const Square = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ width }) => width / 4}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ color }) => color};
  z-index: 0;
  ${({ withShadow }) =>
    withShadow && 'box-shadow: 0 5px 20px 0 rgba(198,58,58,0.15)'};
`;

export default Square;
