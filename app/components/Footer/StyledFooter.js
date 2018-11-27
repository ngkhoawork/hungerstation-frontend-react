import styled from 'styled-components';
import { flex } from 'utils/css/styles';
import { maxPageWidth } from 'utils/css/variables';

const StyledFooter = styled.div`
  ${flex({ direction: 'column' })};
  position: relative;
  width: 100%;
  max-width: ${maxPageWidth};
`;

export default StyledFooter;
