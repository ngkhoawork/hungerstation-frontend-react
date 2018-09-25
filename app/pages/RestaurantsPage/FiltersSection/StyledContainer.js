import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const StyledContainer = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
  `,
  )};
`;

export default StyledContainer;
