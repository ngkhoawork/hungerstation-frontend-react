import styled from 'styled-components';
import { mediaSmall } from 'utils/css/styles';

const Image = styled.img`
  border-radius: 8px;
  margin-bottom: 20px;
  max-width: 100%;
  ${mediaSmall`
    margin-bottom: 45px;
    width: 500px;
  `};
`;

export default Image;
