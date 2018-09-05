import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import { gold } from 'utils/colors';

const StyledScrollButton = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })};
  cursor: pointer;
  background-color: ${gold};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  right: -20px;
  transform: rotate(270deg);
`;

export default StyledScrollButton;
