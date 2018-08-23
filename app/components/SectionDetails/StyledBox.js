import styled from 'styled-components';
import { mediaMedium } from 'utils/styles';

const StyledBox = styled.div`
  max-width: 600px;
  background-color: white;
  border-radius: 8px;
  margin-top: 50px;
  padding: 57px 36px 50px 103px;
  position: relative;
  ${({ left }) =>
    left &&
    `
    margin-left: 500px;
  `};
  ${mediaMedium`
    margin-left: 0;
    padding: 0;
    width: 80%;
  `};
`;

export default StyledBox;
