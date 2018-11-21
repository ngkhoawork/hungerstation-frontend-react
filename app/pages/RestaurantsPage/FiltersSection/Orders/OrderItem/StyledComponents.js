import styled from 'styled-components';
// import { flex } from 'utils/css/styles';

export const RangeValue = styled.div`
  width: 1px;
  height: 20px;
  background: red;
  position: absolute;
  transform: translateX(
    ${({ value }) => (value ? value + (value * 20) / 100 : 0)}%
  );
`;
