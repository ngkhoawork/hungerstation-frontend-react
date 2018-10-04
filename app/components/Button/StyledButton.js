import styled from 'styled-components';
import { gold } from 'utils/css/colors';
import getImage from 'utils/css/images';
import { flexBox } from 'utils/css/styles';

const StyledButton = styled.button`
  ${flexBox({ align: 'center', justify: 'center' })} height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ primary, color }) => (primary ? gold : color)};
  background-image: url(${({ backgroundImage }) => getImage(backgroundImage)});
  background-position: center;
  box-shadow: ${({ lift }) =>
    lift ? '0 10px 20px 0 rgba(126, 125, 125, 0.15)' : 'none'};
  cursor: pointer;

  img {
    margin-bottom: 3px;
    margin-right: 5px;
  }
`;

export default StyledButton;
