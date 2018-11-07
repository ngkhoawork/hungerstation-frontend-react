import styled from 'styled-components';
import { flex, mediaMedium, mediaMediumGreater } from 'utils/css/styles';
import { fuscousGray } from 'utils/css/colors';
import { borderRadius, border, boxShadow } from 'utils/css/variables';

export const Options = styled.div`
  ${flex({})};

  ${mediaMedium`
  ${flex({ direction: 'column' })};
`};
`;

export const DeliveryOption = styled.div`
  ${flex({ align: 'center' })};
  position: relative;
  padding: 10px 20px;
  border-radius: ${borderRadius};
  border: ${border};
  margin-bottom: 20px;
  box-shadow: ${({ isWithBorder }) => (isWithBorder ? boxShadow : 'none')};
  width: 100%;
  cursor: pointer;

  ${mediaMediumGreater`
    width: 50%;
    border-radius: ${borderRadius} 0 0 ${borderRadius};

    :nth-child(2) {
      border-radius: 0 ${borderRadius} ${borderRadius} 0;
      margin-left: 20px;
    }
  `};
`;

export const LeftSide = styled.div`
  padding: 20px;
  ${flex({ shrink: 0 }, false)};
`;

export const Content = styled.div`
  ${flex({ direction: 'column', grow: 1 })};
  font-size: 16px;
  line-height: 1;
  color: ${fuscousGray};
`;

export const titleStyle = {
  fontSize: 18,
  letterSpacing: 0.25,
  marginBottom: 5,
};
