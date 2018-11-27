import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import { maxPageWidth } from 'utils/css/variables';

const StyledBottomSection = styled.div`
  width: 100%;
  max-width: ${maxPageWidth};
  ${flex({ direction: 'column' })};

  ${mediaMedium`max-width: 100%;`};
`;

export default StyledBottomSection;
