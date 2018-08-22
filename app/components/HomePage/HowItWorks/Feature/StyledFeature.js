import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledFeature = styled.span`
  ${flexBox(
    {},
    `
    flex: 0.3;
    margin: 0 70px;
  `,
  )};
`;

export default StyledFeature;
