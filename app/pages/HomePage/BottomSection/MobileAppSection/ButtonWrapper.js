import styled from 'styled-components';
import { mediaSmall, sideMargin } from 'utils/css/styles';

const ButtonWrapper = styled.div`
  width: 144px;
  height: 40px;

  :first-child {
    ${sideMargin('end', '20px')};

    ${mediaSmall`margin-right: 10px;`};
  }
`;

export default ButtonWrapper;
