import styled from 'styled-components';
import { mediaGreater } from 'utils/styles';

const IconWrapper = styled.div`
  cursor: pointer;
  transform: rotate(
    ${({ isSectionExpanded }) => (isSectionExpanded ? 180 : 0)}deg
  );
  ${mediaGreater(1000)`
    display: none;
  `};
`;

export default IconWrapper;
