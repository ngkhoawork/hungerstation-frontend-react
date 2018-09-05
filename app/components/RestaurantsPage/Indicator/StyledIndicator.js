import styled from 'styled-components';
import { jade } from 'utils/colors';
import { flexBox } from 'utils/styles';

const StyledIndicator = styled.div`
  ${flexBox({ align: 'center', justify: 'center' })}
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${jade};
  text-align: center;
  margin: 0 8px;
  padding-top: 2px;
  margin-bottom: 4px;
`;

export default StyledIndicator;
