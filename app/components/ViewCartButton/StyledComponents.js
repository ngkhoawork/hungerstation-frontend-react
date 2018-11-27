import styled from 'styled-components';
import { fuscousGray } from 'utils/css/colors';
import { mediaMediumGreater, mediaSmall } from 'utils/css/styles';
import { fontFamilyRegular, borderRadius } from 'utils/css/variables';

export const CartBtns = styled.div`
  text-align: center;

  ${({ css }) => css};
`;

export const BasketBtn = styled.span`
  cursor: pointer;
  padding: 6px 12px;
  margin-bottom: 10px;
  display: inline-block;
  user-select: none;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  border-radius: ${borderRadius};
`;

export const Content = styled.div`
  font-family: ${fontFamilyRegular} !important;
  position: relative;
  width: 100%;
`;

export const LeftSide = styled.span`
  position: absolute;
  left: 20px;
  top: -4px;

  ${mediaSmall`left: -10px`};

  ${mediaMediumGreater`display: none;`};
`;

export const RightSide = styled.span`
  position: absolute;
  right: 20px;
  top: 4px;

  ${mediaSmall`right: -10px`};

  ${mediaMediumGreater`display: none;`};
`;

export const Label = styled.span`
  color: ${({ isCheckout, isDisabled }) =>
    isCheckout && !isDisabled ? 'white' : fuscousGray};
  font-size: 20px;
  display: inline-block;
  margin-top: 2px;
`;
