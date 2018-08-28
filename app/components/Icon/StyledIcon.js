import styled from 'styled-components';
import { alto } from 'utils/colors';

const StyledIcon = styled.img`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  ${({ circled, size }) =>
    circled &&
    `
      background-color: ${alto};
      border-radius: ${(size + 10) / 2}px;
      padding: 5px;
      width: ${size + 7}px;
      height: ${size + 7}px;
    `};
`;

export default StyledIcon;
