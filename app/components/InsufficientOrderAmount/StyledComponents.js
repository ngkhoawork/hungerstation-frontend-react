import styled from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import { jade } from 'utils/css/colors';

export const Content = styled.div`
  margin: 20px auto;
  width: 280px;
  text-align: center;
`;

export const Footer = styled.div`
  ${flex({ justify: 'center', wrap: 'wrap' })};

  button {
    margin: 5px 10px 10px;
  }

  ${mediaMedium`
    ${flex({ direction: 'column' }, false)};
    align-items: center;
    width: fit-content;
    margin: 0 auto;

    button {
      width: 100%;
    }
  `};
`;

export const SearchBtnStyle = {
  backgroundColor: jade,
  color: 'white',
};
