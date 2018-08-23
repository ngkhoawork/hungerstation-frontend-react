import styled from 'styled-components';

import { gold } from 'utils/colors';
import Toggle from 'icons/toggle.svg';
import Checkbox from './Checkbox';

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: 0.4s;

  cursor: pointer;
  background-color: #ccc;
  border-radius: 34px;

  ${Checkbox}:focus + & {
    box-shadow: 0 0 1px #3b97d3;
  }

  &:before {
    position: absolute;
    content: '';
    left: 3px;
    bottom: 3px;
    transition: 0.4s;
    height: 16px;
    width: 16px;
    background-color: ${gold};
    background-image: url(${Toggle});
    border-radius: 50%;

    ${Checkbox}:checked + & {
      transform: translateX(17px);
    }
  }
`;

export default Slider;
