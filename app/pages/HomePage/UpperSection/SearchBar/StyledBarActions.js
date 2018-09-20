import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledBarActions = styled.div`
  ${flexBox(
    {},
    `
    margin-right: 10px;
  `,
  )};
  ${mediaMedium`
    width: 100%;
    margin-right: 0;
  `};
`;

export default StyledBarActions;
