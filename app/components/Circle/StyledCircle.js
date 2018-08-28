import styled from 'styled-components';

const StyledCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ color }) => color};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export default StyledCircle;
