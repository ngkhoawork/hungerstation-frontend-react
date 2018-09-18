import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledList = styled.div`
  ${flexBox(
    { align: 'flex-start', justify: 'space-between' },
    `
    width: 100%;
    flex-wrap: wrap;
  `,
  )};
`;

export default StyledList;
