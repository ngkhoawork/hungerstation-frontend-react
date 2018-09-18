import styled from 'styled-components';
import { gold } from 'utils/colors';
import getImage from 'utils/images';
import { flexBox } from 'utils/styles';

const StyledButton = styled.button`
  ${flexBox({ align: 'center', justify: 'center' })} height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ primary, color }) => (primary ? gold : color)};
  background-image: url(${({ backgroundImage }) => getImage(backgroundImage)});
  background-position: center;
  box-shadow: 0 10px 20px 0 rgba(126, 125, 125, 0.15);
  img {
    margin-bottom: 3px;
    margin-right: 5px;
  }
  cursor: pointer;
`;

export default StyledButton;
