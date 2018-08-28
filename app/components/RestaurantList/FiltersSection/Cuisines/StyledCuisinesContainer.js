import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledCuisinesContainer = styled.div`
  ${flexBox(
    { align: 'flex-start', direction: 'column' },
    `
    width: 100%;
  `,
  )};
`;

export default StyledCuisinesContainer;
