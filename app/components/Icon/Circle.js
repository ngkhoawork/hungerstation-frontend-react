import styled from 'styled-components';
import { wildSand } from 'utils/css/colors';

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${wildSand};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  cursor: inherit;
`;

export default Circle;
