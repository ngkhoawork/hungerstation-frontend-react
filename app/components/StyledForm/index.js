import styled from 'styled-components';
import { mediaSmall } from 'utils/styles';

const StyledForm = styled.form`
  width: 70%;
  ${mediaSmall`
    width: 95%;
  `};
`;

export default StyledForm;
