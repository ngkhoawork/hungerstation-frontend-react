import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fuscousGray } from 'utils/colors';

export default styled(Link)`
  text-decoration: none;
  background: rgba(216, 216, 216, 0.37);
  border-radius: 10px;
  padding: 0.4em 0.7em 0.4em 0.7em;
  vertical-align: middle;
  line-height: 1em;
  font-size: 14px;
  color: ${fuscousGray};

  :hover {
    background: rgba(216, 216, 216, 0.67);
  }
`;
