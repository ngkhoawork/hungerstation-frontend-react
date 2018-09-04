import styled from 'styled-components';
import { flexBox } from 'utils/styles';

const Row = styled.div`
  ${flexBox({ align: 'center', justify: 'flex-start' }, `position: relative`)};
`;

export default Row;
