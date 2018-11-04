import styled from 'styled-components';
import media from 'styled-media-query';
import { flex } from 'utils/css/styles';

const StyledSection = styled.div`
  ${flex({ direction: 'column' })};

  ${media.lessThan('850px')`
    width: 90%;
  `};
`;

export default StyledSection;
