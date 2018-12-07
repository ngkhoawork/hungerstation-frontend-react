import styled from 'styled-components';
import { flex, mediaMedium, sideMargin } from 'utils/css/styles';
import Title from './Title';

const StyledItem = styled.div`
  ${flex({ align: 'flex-start', direction: 'row', wrap: 'wrap' })};
  align-content: flex-start;
  width: 25%;
  margin-bottom: 16px;
  cursor: pointer;

  ${mediaMedium`
    width: auto;
    margin-bottom: 8px;
    ${sideMargin('end', '16px')};

    ${Title} {
      margin-top: 8px;
      margin-bottom: 0;
      ${sideMargin('end', '0')};
    }
  `};
`;

export default StyledItem;
