import styled from 'styled-components';
import { mediaSmall } from 'utils/styles';

const DetailsWrapper = styled.div`
  display: block;
  padding: 80px 60px;
  border-radius: 8px;
  background: white;
  ${mediaSmall`
    padding: 20px;
  `};
`;

export default DetailsWrapper;
