import styled from 'styled-components';

const StyledDropdown = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  width: 35%;
  cursor: pointer;
  &:first-of-type {
    margin-left: 20px;
  }
`;

export default StyledDropdown;
