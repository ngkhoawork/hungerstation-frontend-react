import styled, { css } from 'styled-components';
import { mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { jade } from 'utils/css/colors';

export const containerStyle = css`
  padding: 0 20px 30px;

  ${mediaMediumGreater`width: 352px;`};
`;

export const Content = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Footer = styled.div`
  ${mediaMedium`
    margin: 0 auto;
    width: 100%;
  `};
`;

export const BtnStyle = {
  backgroundColor: jade,
  color: 'white',
};
