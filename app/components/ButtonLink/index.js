import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fuscousGray } from 'utils/css/colors';
import { fontFamilyRegular } from 'utils/css/variables';

export default styled(Link)`
  text-decoration: none;
  background: rgba(216, 216, 216, 0.37);
  border-radius: 10px;
  padding: 6px 7px;
  vertical-align: middle;
  line-height: 1em;
  font-size: 14px;
  font-family: ${fontFamilyRegular};
  color: ${fuscousGray};
  margin: 0px 3px;

  :hover {
    background: rgba(216, 216, 216, 0.67);
  }
`;
