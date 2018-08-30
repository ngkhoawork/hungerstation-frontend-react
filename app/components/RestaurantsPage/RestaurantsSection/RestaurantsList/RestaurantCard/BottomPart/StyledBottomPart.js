import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledBottomPart = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
    flex: 0.2;
  `,
  )};
`;

export default StyledBottomPart;
