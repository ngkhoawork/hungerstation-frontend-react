import styled from 'styled-components';
import { mediaLess } from 'utils/css/styles';
import { Link } from 'react-router-dom';

const ButtonWrapper = styled(Link)`
  text-decoration: none;
  width: 200px;
  height: 40px;
  align-self: center;
  margin-top: 20px;
  ${mediaLess(600)`
    align-self: flex-start;
    width: 160px;
  `};
`;

export default ButtonWrapper;
