import styled, { css } from 'styled-components';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 60px;
  padding-bottom: 100px;
  ${flex({ direction: 'column' })};

  ${mediaMedium`padding: 20px;`};
`;

export const UpperSide = styled.div`
  width: 100%;
  ${flex({ align: 'flex-start' })};

  ${mediaMedium`
    ${flex({ align: 'stretch', direction: 'column' })};
  `};
`;

export const mapStyles = css`
  ${mediaMedium`margin-bottom: 30px;`};
  ${mediaMediumGreater`width: 50%; margin-right: 40px;`};
`;

export const BottomSide = styled.div`
  padding-top: 40px;
  ${flex({ align: 'flex-start', justify: 'space-between' })};
`;
