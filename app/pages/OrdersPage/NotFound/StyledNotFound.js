import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon/StyledIcon';

const StyledNotFound = styled.div`
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
    &:nth-child(3) {
      width: 320px;
      text-align: center;
    }
  }

  ${mediaLess(1250)`
    ${flex({ justify: 'center' }, false)};
  `};

  ${mediaLess(600)`
    ${flex({ wrap: 'nowrap' }, false)};
    padding: 20px;
    padding-left: 0;
  `};
`;

export default StyledNotFound;
