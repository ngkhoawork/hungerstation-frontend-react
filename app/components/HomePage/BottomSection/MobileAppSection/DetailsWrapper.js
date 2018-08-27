import styled from 'styled-components';
import { mediaSmall } from 'utils/styles';

const DetailsWrapper = styled.div`
  display: block;
  padding: 160px 60px 80px;
  border-radius: 8px;
  ${mediaSmall`
    padding: 60px 40px
  `};
`;

export default DetailsWrapper;
