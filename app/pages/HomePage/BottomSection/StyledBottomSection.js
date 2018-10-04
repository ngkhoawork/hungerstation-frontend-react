import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledBottomSection = styled.div`
  ${flexBox(
    { direction: 'column' },
    `
      width: 100%;
      max-width: 1446px;
    `,
  )};
`;

export default StyledBottomSection;
