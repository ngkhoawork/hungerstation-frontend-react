import styled from 'styled-components';
import { Field } from 'formik';
import { mediaSmall } from 'utils/styles';

export const StyledFieldWrapper = styled(Field)``;

const StyledForm = styled.form`
  width: 70%;
  ${mediaSmall`
    width: 95%;
  `};
  // Added specifity
  ${StyledFieldWrapper} {
    margin-bottom: 8px;
  }
`;

export default StyledForm;
