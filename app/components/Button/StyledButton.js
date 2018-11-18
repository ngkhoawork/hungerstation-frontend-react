import styled, { css } from 'styled-components';
import { gold, paleSlate, alabaster } from 'utils/css/colors';
import getImage from 'utils/css/images';
import { flex } from 'utils/css/styles';
import { fontFamilyRegular, borderRadius } from 'utils/css/variables';
import Spinner from 'components/Spinner/StyledSpinner';

const StyledButton = styled.button`
  ${flex({ align: 'center', justify: 'center' })};
  height: 100%;
  width: ${({ inline }) => (inline ? 'auto' : '100%')};
  border-radius: ${borderRadius};
  background-color: ${({ primary, color }) => (primary ? gold : color)};
  background-image: url(${({ backgroundImage }) => getImage(backgroundImage)});
  background-position: center;
  box-shadow: ${({ lift }) =>
    lift ? '0 10px 20px 0 rgba(126, 125, 125, 0.15)' : 'none'};
  cursor: pointer;
  outline: 0;
  padding: ${({ size }) => {
    if (size === 'l') return '14px 28px';
    if (size === 'xl') return '18px 34px';
    return '10px 20px';
  }};
  font-family: ${fontFamilyRegular};
  line-height: 1em;

  :disabled {
    background-color: ${({ disabledColor }) => disabledColor || paleSlate};
    cursor: default;
    box-shadow: none;
    border: solid 1px ${alabaster};

    > * {
      opacity: 0.5;
    }

    & ${Spinner} {
      &:after {
        border-top: 2px solid ${paleSlate};
        border-left: 2px solid ${paleSlate};
      }
    }
  }
  img {
    margin-right: 5px;
  }

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

export default StyledButton;
