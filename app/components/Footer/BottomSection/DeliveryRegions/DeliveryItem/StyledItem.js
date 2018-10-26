import styled from 'styled-components';
import { mediaMedium } from 'utils/css/styles';
import Title from './Title';

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;

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
