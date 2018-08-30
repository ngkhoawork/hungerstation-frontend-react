import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledRegions = styled.div`
  ${flexBox(
    { align: 'center' },
    `
    flex-wrap: wrap;
  `,
  )};
`;

export default StyledRegions;
