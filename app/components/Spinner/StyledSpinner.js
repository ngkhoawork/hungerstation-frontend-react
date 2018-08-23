import styled, { keyframes } from 'styled-components';
import { gold } from 'utils/colors';

const rotate = keyframes`
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const StyledSpinner = styled.div`
  display: none;
  position: relative;
  width: 25px;
  height: 25px;

  &:after {
    display: block;
    width: 25px;
    height: 25px;
    position: relative;
    border-radius: 100%;
    border-top: 2px solid ${gold};
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    border-left: 2px solid ${gold};
    border-right: 2px solid rgba(0, 0, 0, 0.1);
    content: '';
    animation: ${rotate} 0.5s ease infinite;
  }

  ${({ isActive }) =>
    isActive &&
    `
    display: block;
  `};
`;

export default StyledSpinner;
