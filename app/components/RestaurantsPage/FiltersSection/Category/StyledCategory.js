import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledCategory = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
    margin: 20px 0;
  `,
  )};
`;

export default StyledCategory;
