import styled from 'styled-components';
import { flexBox, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.span`
  ${flexBox({ align: 'center' })};
  padding: 0 10px;
  cursor: pointer;
  ${mediaMedium`
    position: absolute;
    right: 5%;
    margin-right: 16px;
  `};
  }
`;

export default StyledContainer;
