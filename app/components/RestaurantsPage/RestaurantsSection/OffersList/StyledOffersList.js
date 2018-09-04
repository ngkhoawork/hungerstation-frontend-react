import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledOffersList = styled.div`
  ${flexBox(
    { align: 'flex-start' },
    `
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  )};
`;

export default StyledOffersList;
