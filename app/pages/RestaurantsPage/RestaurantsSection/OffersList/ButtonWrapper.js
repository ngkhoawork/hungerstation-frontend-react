import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';

const ButtonWrapper = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })};
  position: absolute;
  top: 135px;
  right: -5px !important;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 10px 20px 0 rgba(126, 125, 125, 0.15);
  z-index: 1;
  ${mediaLess(600)`
    display: none;
  `};
`;

export default ButtonWrapper;
