import styled from 'styled-components';
import { flex, mediaLess, sidePadding } from 'utils/css/styles';

const StyledSection = styled.div`
  position: relative;
  margin-bottom: 70px;
  width: 100%;
  ${flex({ align: 'flex-start', direction: 'column' })};

  ${mediaLess(600)`
    ${sidePadding('start', '20px;')};
    margin-bottom: 30px;
  `};
`;

export default StyledSection;
