import styled from 'styled-components';
import { candlelight } from 'utils/colors';

const Circle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${candlelight};
`;

export default Circle;
