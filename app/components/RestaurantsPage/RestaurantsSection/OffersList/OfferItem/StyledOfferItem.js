import styled from 'styled-components';
import { flexBox } from 'utils/styles';
import Desert from 'images/desert.png';
import { SLIDE_TO_LEFT, SLIDE_MARGIN } from '../constants';

const StyledOfferItem = styled.div`
  ${flexBox({
    justify: 'space-between',
    direction: 'column',
  })};
  min-width: ${SLIDE_TO_LEFT}px;
  height: 180px;
  border-radius: 8px;
  margin-right: ${SLIDE_MARGIN}px;
  background-image: url(${Desert});
  background-position: center;
  padding: 15px;
  cursor: pointer;
`;

export default StyledOfferItem;
