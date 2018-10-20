import styled from 'styled-components';
import { mediaSmall } from 'utils/css/styles';
import { alabaster } from 'utils/css/colors';

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  padding: 54px 113px 70px;
  border: 2px solid ${alabaster};
  margin-bottom: 8px;

  ${mediaSmall`
    padding: 20px 40px;
  `};
`;

export default StyledSection;
