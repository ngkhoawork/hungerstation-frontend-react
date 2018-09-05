import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';
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
  ${mediaLess(600)`
    align-self: flex-start;
    right: 20px;
    bottom: 25px;
  `};
`;

export default StyledScrollButton;
