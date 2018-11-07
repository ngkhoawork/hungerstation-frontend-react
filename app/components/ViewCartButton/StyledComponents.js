import styled from 'styled-components';
import { fuscousGray } from 'utils/css/colors';
import { mediaMediumGreater } from 'utils/css/styles';
import { fontFamilyRegular, borderRadius } from 'utils/css/variables';

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

  ${mediaMediumGreater`display: none;`};
`;

export const RightSide = styled.span`
  position: absolute;
  right: 20px;
  top: 4px;

  ${mediaMediumGreater`display: none;`};
`;

export const Label = styled.span`
  color: ${({ isCheckout, isDisabled }) =>
    isCheckout && !isDisabled ? 'white' : fuscousGray};
  font-size: 20px;
  display: inline-block;
  margin-top: 2px;
`;
