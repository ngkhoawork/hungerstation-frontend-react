import styled from 'styled-components';
import { gold } from 'utils/colors';
import getImage from 'utils/images';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ primary }) => (primary ? gold : 'white')};
  background-image: url(${({ backgroundImage }) => getImage(backgroundImage)});
  box-shadow: 0 10px 20px 0 rgba(198, 58, 58, 0.15);
`;

export default StyledButton;
