import styled from 'styled-components';

import { flex } from 'utils/css/styles';

const ItemContainer = styled.span`
  ${flex({ align: 'flex-start', direction: 'column' })};
  margin-right: 10px;
  margin-top: 3px;
  cursor: pointer;
`;

export default ItemContainer;
