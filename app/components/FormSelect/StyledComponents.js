import styled from 'styled-components';
import { flex } from 'utils/css/styles';
import { fuscousGray, silverChalice } from 'utils/css/colors';
import FormControlLabel from './FormControlLabel';

export const StyledFormControlLabel = styled(FormControlLabel)`
  & > span:nth-child(2) {
    flex-grow: 1;
  }
`;

export const Label = styled.span`
  color: ${({ isSelected }) => (isSelected ? fuscousGray : silverChalice)};
  ${flex({ justify: 'space-between' })};
`;

export const Price = styled.span`
  font-size: 13px;
`;
