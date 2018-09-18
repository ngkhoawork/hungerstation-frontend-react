import styled from 'styled-components';
import { alto } from 'utils/colors';

const StyledIcon = styled.img`
  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `};
  z-index: 10;
  ${({ circled, size }) =>
    circled &&
    `
      background-color: ${alto};
      border-radius: ${(size + 10) / 2}px;
      padding: 6px;
      width: ${size + 7}px;
      height: ${size + 7}px;
    `};
`;

export default StyledIcon;
