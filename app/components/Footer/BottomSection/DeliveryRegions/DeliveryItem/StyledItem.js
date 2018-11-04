import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
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
    margin-right: 16px;

    ${Title} {
      margin: 8px 0 0;
    }
  `};
`;

export default StyledItem;
