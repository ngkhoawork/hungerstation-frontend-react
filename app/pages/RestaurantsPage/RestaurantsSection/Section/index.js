import styled from 'styled-components';
import { flex, mediaLess } from 'utils/css/styles';

const StyledSection = styled.div`
  position: relative;
  margin-bottom: 70px;
  width: 100%;
  ${flex({ align: 'flex-start', direction: 'column' })};

  ${mediaLess(600)`
    padding-left: 20px;
    margin-bottom: 30px;
  `};
`;

export default StyledSection;
