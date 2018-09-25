import styled from 'styled-components';
import { wildSant } from 'utils/css/colors';

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${wildSant};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export default Circle;
