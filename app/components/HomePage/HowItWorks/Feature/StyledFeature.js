import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/styles';

const StyledFeature = styled.span`
  ${flexBox(
    {},
    `
    flex: 0.3;
    margin: 0 70px;
  `,
  )};
  ${mediaMedium`
    flex: 1;
    margin: 0 35px 0 20px;
  `};
`;

export default StyledFeature;
