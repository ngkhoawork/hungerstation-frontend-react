import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox } from 'utils/styles';

const StyledSection = styled.div`
  ${flexBox({ direction: 'column' }, `width: 808px;`)};
  ${media.lessThan('850px')`
    width: 90%;
    padding: 0 20px;
  `};
`;

export default StyledSection;
