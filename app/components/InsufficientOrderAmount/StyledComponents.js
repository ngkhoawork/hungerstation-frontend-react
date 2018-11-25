import styled, { css } from 'styled-components';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { jade } from 'utils/css/colors';

export const containerStyle = css`
  padding: 0 20px 25px;
  ${mediaMediumGreater`width: 424px;`};
`;

export const Content = styled.div`
  margin: 20px auto;
  text-align: center;
`;

export const Footer = styled.div`
  ${flex()};

  button {
    flex-grow: 1;
  }

  ${mediaMediumGreater`
    button:first-child {
      margin-right: 20px;
    }
  `};

  ${mediaMedium`
    ${flex({ direction: 'column' }, false)};
    align-items: center;
    margin: 0 10%;

    button {
      width: 100%;

      &:first-child {
        margin-bottom: 20px;
      }
    }
  `};
`;

export const SearchBtnStyle = {
  backgroundColor: jade,
  color: 'white',
};
