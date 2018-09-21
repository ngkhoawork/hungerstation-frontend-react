import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';
import { BarActions } from '../StyledComponents';

const StyledContainer = styled.span`
  ${flexBox(
    { align: 'center' },
    `padding: 0 20px;
  cursor: pointer;`,
  )};
  ${BarActions} && {
    ${mediaMedium`
      display: none;
    `};
  }
`;

export default StyledContainer;
