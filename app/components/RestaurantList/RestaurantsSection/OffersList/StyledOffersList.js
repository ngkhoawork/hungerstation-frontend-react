import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledOffersList = styled.div`
  ${flexBox(
    { align: 'flex-start' },
    `
    overflow: scroll
  `,
  )};
`;

export default StyledOffersList;
