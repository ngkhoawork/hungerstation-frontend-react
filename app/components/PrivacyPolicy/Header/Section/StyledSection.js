import styled from 'styled-components';
import { flex, mediaSmall } from 'utils/css/styles';

const StyledSection = styled.div`
  ${flex({ align: 'flex-start', justify: 'center' })};
  width: 100%;
  border-radius: 8px;
  margin-bottom: 50px;
  padding: 0 0 40px;
  position: relative;
  margin-top: 50px;

  &:first-of-type {
    margin-top: 0px;
    margin-bottom: 0;
    padding: 0;
    width: 850px;
  }

  ${mediaSmall`
    &:first-of-type {
      margin-top: 0px;
      width: 100%;
      flex-direction: column-reverse;
      align-items: center;
    }
  `};
`;

export default StyledSection;
