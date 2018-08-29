import styled from 'styled-components';
import media from 'styled-media-query';
import { flexBox } from 'utils/styles';

const StyledSection = styled.div`
  ${flexBox({ direction: 'column' })};
  ${media.lessThan('850px')`
    width: 90%;
  `};
`;

export default StyledSection;
