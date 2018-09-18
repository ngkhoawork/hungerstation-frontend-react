import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledTagsContainer = styled.div`
  ${flexBox(
    { align: 'flex-start' },
    `
    flex-wrap: wrap
  `,
  )};
`;

export default StyledTagsContainer;
