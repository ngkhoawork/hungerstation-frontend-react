import styled from 'styled-components';
import { jade } from 'utils/colors';

const StyledInput = styled.input.attrs({
  type: 'range',
})`
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.1s;
  transition: opacity 0.1s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: white;
    border: 1px solid ${jade};
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
  }
  &::-moz-range-progress {
    background-color: blue;
    height: 2px;
  }
  &::-ms-fill-lower {
    background: blue;
    border-radius: 0;
  }
  &::-webkit-progress-value {
    background-color: blue;
  }
`;

export default StyledInput;
