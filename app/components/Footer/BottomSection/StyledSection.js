import styled from 'styled-components';
import { mediaSmall } from 'utils/styles';

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 113px 70px;
  ${mediaSmall`
    padding: 20px 40px;
  `};
`;

export default StyledSection;
