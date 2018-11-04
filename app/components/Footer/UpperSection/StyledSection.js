import styled from 'styled-components';
import { flex, mediaMedium, mediaSmall } from 'utils/css/styles';

const StyledSection = styled.div`
  ${flex({ align: 'center', justify: 'space-between' })};
  padding: 0 113px 48px;

  ${mediaMedium`
    ${flex({ align: 'flex-start', direction: 'column' }, false)};
    padding: 30px 113px 10px;
  `};

  ${mediaSmall`
    ${flex({ align: 'flex-start' }, false)};
    padding: 20px 40px;
  `};
`;

export default StyledSection;
