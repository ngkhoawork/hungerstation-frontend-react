import styled from 'styled-components';
import { jade } from 'utils/colors';

const StyledIndicator = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${jade};
  text-align: center;
  position: relative;
  margin-left: 5px;
  margin-bottom: 4px;
`;

export default StyledIndicator;
