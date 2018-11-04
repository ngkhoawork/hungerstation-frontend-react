import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';

const StyledContainer = styled.span`
  ${flex({ align: 'center' })};
  padding: 0 10px;
  cursor: pointer;

  ${mediaMedium`
    position: absolute;
    right: 5%;
    margin-right: 16px;
  `};
`;

export default StyledContainer;
