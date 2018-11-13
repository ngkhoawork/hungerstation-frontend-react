import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';

const StyledBottomSection = styled.div`
  width: 100%;
  max-width: 1446px;
  ${flex({ direction: 'column' })};

  ${mediaMedium`max-width: 100%;`};
`;

export default StyledBottomSection;
