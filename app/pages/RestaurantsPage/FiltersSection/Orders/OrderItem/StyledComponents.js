import styled from 'styled-components';
import { flex, sideMargin, mediaLess } from 'utils/css/styles';
import { fontFamilyLight, fontFamilyRegular } from 'utils/css/variables';
import { jade, boulder } from 'utils/css/colors';

export const StyledOrderItem = styled.div`
  padding: 0 0 10px 0;
  width: 100%;
`;

export const Name = styled.div`
  font-family: ${fontFamilyLight};
  font-size: 14px;
  color: ${boulder};
`;

export const StyledSliderContainer = styled.div`
  ${flex()};
`;

export const Number = styled.span`
  font-size: 12px;
  color: ${boulder};
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  bottom: -7px;

  &:first-child {
    ${sideMargin('end', '5px;')};
  }
  &:last-child {
    ${sideMargin('start', '5px')};
  }

  @-moz-document url-prefix() {
    bottom: -4.7px;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    bottom: -4.7px;
  }
`;

export const RangeContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  position: relative;
  transform: translateZ(0);
`;

export const RangeProgressBar = styled.div`
  height: 2.2px;
  background: ${jade};
  margin-top: -8.2px;

  @-moz-document url-prefix() {
    display: none;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: none;
  }
`;

export const RangeValue = styled.div`
  width: 28px;
  height: 0px;
  font-family: ${fontFamilyRegular};
  font-size: 12px;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 11px;
  pointer-events: none;
  ${mediaLess(950)`
    width: 6%;
`};
  @-moz-document url-prefix() {
    bottom: 16.1px;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    bottom: 16px;
  }
`;

// &::-webkit-slider-runnable-track {
//   height: 2px;
//   appearance: none;
//   color: gold;
//   background: gold;
//   margin-top: -9px;
// }
const rangeBackgroundColor = 'rgba(158, 223, 173, 0.13)';
export const StyledInput = styled.input.attrs({
  type: 'range',
})`
  width: 100%;
  height: 2px;
  background-color: ${rangeBackgroundColor};
  appearance: none;
  outline: none;

  @media screen and (min-width: 0\0) {
    height: auto;
  }

  &::-webkit-slider-thumb {
    width: 24px;
    height: 18px;
    border-radius: 3px;
    background: ${jade};
    cursor: pointer;
    appearance: none;
  }
  &::-webkit-progress-value {
    background-color: ${jade};
  }
  &::-moz-range-thumb {
    width: 24px;
    height: 18px;
    border-radius: 3px;
    background: ${jade};
    cursor: pointer;
  }
  &::-moz-range-track {
    background-color: ${rangeBackgroundColor};
  }
  &::-moz-range-progress {
    background-color: ${jade};
    height: 2px;
  }
  &::-moz-focus-outer {
    border: 0;
  }
  &::-ms-thumb {
    width: 24px;
    height: 18px;
    border-radius: 3px;
    background: ${jade};
    cursor: pointer;
  }
  &::-ms-track {
    overflow: visible;
    height: 2px;
    background-color: ${rangeBackgroundColor};
  }
  &::-ms-fill-lower {
    background: ${jade};
    border-radius: 0;
  }
  &::-ms-fill-upper {
    background-color: ${rangeBackgroundColor};
  }
`;
