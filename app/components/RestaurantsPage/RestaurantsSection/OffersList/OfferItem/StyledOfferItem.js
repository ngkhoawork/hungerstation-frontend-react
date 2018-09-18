import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/styles';
import Desert from 'images/desert.png';

const StyledOfferItem = styled.div`
  ${flexBox({
    justify: 'space-between',
    direction: 'column',
  })};
  min-width: 340px;
  height: 180px;
  border-radius: 8px;
  margin-right: 20px;
  background-image: url(${Desert});
  background-position: center;
  padding: 15px;
  cursor: pointer;
  ${mediaLess(600)`
    min-width: 260px;
  `};
`;

export default StyledOfferItem;
