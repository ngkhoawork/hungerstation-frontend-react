import styled from 'styled-components';
import { flex } from 'utils/css/styles';
import { jade } from 'utils/css/colors';

export const Content = styled.div`
  margin: 20px auto;
  width: 280px;
  text-align: center;
`;

export const Footer = styled.div`
  ${flex({ justify: 'center' })};
  flex-wrap: wrap;

  button {
    margin: 5px 10px;
  }
`;

export const SearchBtnStyle = {
  backgroundColor: jade,
  color: 'white',
};
