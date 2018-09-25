import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const ButtonWrapper = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })};
  cursor: pointer;
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

export default ButtonWrapper;
