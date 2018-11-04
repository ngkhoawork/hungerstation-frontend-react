import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';
import Desert from 'images/desert.png';

const StyledOfferItem = styled.div`
  ${flex({
    justify: 'space-between',
    direction: 'column',
  })};
  min-width: 340px;
  height: 180px;
  border-radius: 8px;
  margin-right: 24px;
  background-image: url(${Desert});
  background-position: center;
  padding: 16px;
  cursor: pointer;
  ${mediaLess(600)`
    min-width: 260px;
  `};
`;

export default StyledOfferItem;
