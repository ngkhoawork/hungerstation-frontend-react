import styled from 'styled-components';

const IconWrapper = styled.div`
  display: inline-flex;
  align-item: center;
  justify-content: center;
  position: relative;
  z-index: 15;
  top: ${({ offsetY }) => offsetY || 0}px;
`;

export default IconWrapper;
