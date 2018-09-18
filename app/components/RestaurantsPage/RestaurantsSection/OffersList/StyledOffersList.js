import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const StyledOffersList = styled.div`
  ${flexBox(
    { align: 'flex-start' },
    `
    width: 100%;
    overflow-x: auto;
    margin-top: 20px;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  )};
`;

export default StyledOffersList;
