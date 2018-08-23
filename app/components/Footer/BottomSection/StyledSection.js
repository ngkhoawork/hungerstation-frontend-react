import styled from 'styled-components';
import media from 'styled-media-query';

const StyledSection = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 113px 70px;
  ${media.lessThan('850px')`
    display: none;
  `};
`;

export default StyledSection;
