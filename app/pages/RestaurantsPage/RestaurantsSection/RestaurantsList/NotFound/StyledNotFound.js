import styled from 'styled-components';
import { flexBox, mediaLess } from 'utils/css/styles';
import Paragraph from 'components/Paragraph/StyledParagraph';
import Icon from 'components/Icon/StyledIcon';

const StyledRestaurantList = styled.div`
  ${flexBox(
    { align: 'center', justify: 'center', direction: 'column' },
    `
    flex-wrap: wrap;
    width: 100%;
  `,
  )};
  position: relative;
  ${mediaLess(1250)`
    justify: center;
  `};
  ${mediaLess(600)`
    flex-wrap: nowrap;
    padding: 20px;
    padding-left: 0;
  `};
  ${Icon} {
    margin-bottom: 10px;
  }
  ${Paragraph} {
    &:last-child {
      width: 270px;
      text-align: center;
    }
  }
`;

export default StyledRestaurantList;
