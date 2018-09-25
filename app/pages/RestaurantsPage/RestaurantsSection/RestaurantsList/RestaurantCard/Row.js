import styled from 'styled-components';
import { flexBox } from 'utils/css/styles';

const Row = styled.div`
  ${flexBox({ align: 'center', justify: 'flex-start' }, `position: relative`)};
`;

export default Row;
