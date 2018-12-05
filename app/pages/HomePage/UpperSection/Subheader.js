import styled from 'styled-components';
import media from 'styled-media-query';

const Subheader = styled.p`
  font-size: 35px;
  color: white;
  margin: 0;
  margin-top: 90px;
  ${media.lessThan('850px')`
    font-size: 25px;
    margin: 0;
  `};
`;

export default Subheader;
