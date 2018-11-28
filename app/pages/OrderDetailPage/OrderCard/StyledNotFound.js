import styled from 'styled-components';
import { flex, mediaLess, sidePadding } from 'utils/css/styles';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon/StyledIcon';

const StyledRestaurantList = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  ${flex({
    align: 'center',
    justify: 'center',
    direction: 'column',
    wrap: 'wrap',
  })};

  ${/* sc-custom "icon" */ Icon} {
    margin-bottom: 10px;
  }

  ${/* sc-selector */ Paragraph} {
    &:last-child {
      width: 270px;
      text-align: center;
    }
  }

  ${mediaLess(1250)`
    ${flex({ justify: 'center' }, false)};
  `};

  ${mediaLess(600)`
    ${flex({ wrap: 'nowrap' }, false)};
    padding: 20px;
    ${sidePadding('start', '0')};
  `};
`;

export default StyledRestaurantList;
