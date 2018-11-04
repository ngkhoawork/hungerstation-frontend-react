import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';

const StyledRestaurantList = styled.div`
  width: 100%;
  position: relative;
  ${flex({
    align: 'flex-start',
    justify: 'space-between',
    direction: 'column',
    wrap: 'wrap',
  })};

  ${mediaLess(1250)`
    ${flex({ justify: 'flex-start' }, false)}
  `};

  ${mediaLess(600)`
    ${flex({ wrap: 'nowrap' }, false)};
    padding: 20px;
    padding-left: 0;
  `};
`;

export default StyledRestaurantList;
