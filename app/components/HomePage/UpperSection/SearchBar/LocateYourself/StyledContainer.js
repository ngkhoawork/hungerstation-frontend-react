import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';
import StyledBarActions from '../StyledBarActions';

const StyledContainer = styled.span`
  ${flexBox(
    { align: 'center' },
    `padding: 0 20px;
  cursor: pointer;`,
  )};
  ${StyledBarActions} && {
    ${mediaMedium`
      display: none;
    `};
  }
`;

export default StyledContainer;
