import styled from 'styled-components';
import { mediaSmall } from 'utils/css/styles';
import { alabaster } from 'utils/css/colors';

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 54px 113px 70px;
  border: 2px solid ${alabaster};
  margin-bottom: 8px;

  ${mediaSmall`
    padding: 20px;
    border: 0;
    border-top: 2px solid ${alabaster};
  `};
`;

export default StyledSection;
