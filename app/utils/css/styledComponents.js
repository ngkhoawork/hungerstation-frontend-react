import styled from 'styled-components';
import { flex, mediaMedium, mediaSmall } from 'utils/css/styles';
import { Link } from 'react-router-dom';
import { Field } from 'formik';
import {
  persimmon,
  errorBg,
  jade,
  silverChalice,
  alabaster,
} from 'utils/css/colors';
import {
  borderRadius,
  zIndexDisabledOverlay,
  fontFamilyRegular,
  navHeaderHeight,
  pageOffsetX,
  mobPageOffsetX,
  smallMobPageOffsetX,
} from './variables';

export const CenteredContent = styled.div`
  ${flex({ align: 'center', justify: 'space-evenly' })};

  > * {
    margin: 0 8px;
  }
`;

export const StyledForm = styled.form`
  width: 70%;
  ${mediaSmall`
    width: 95%;
  `};
`;

export const StyledFieldWrapper = Field;

export const StyledPage = styled.div`
  ${flex({
    align: 'center',
    direction: 'column',
    justify: 'flex-start',
  })};

  font-family: ${fontFamilyRegular};
  padding: 57px;
  background-color: #fff;
  border-radius: 8px;
  width: 50%;
  margin-bottom: 56px;

  ${mediaSmall`
    padding: 0 10px;
    width: 95%;
    padding: 50px 10px;
  `};
`;

export const StyledLink = styled(Link)`
  color: ${({ color }) => color};
  text-decoration: none;
  margin: 0;
`;

export const DisabledOverlay = styled.div`
  background-color: ${alabaster};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: initial;
  z-index: ${zIndexDisabledOverlay};
`;

export const NavHeader = styled.div`
  min-height: ${navHeaderHeight};
  width: 100%;
  padding: 20px ${pageOffsetX};
  ${flex({ align: 'flex-start' })};

  ${mediaMedium`
    padding: 20px ${mobPageOffsetX};
  `};

  ${mediaSmall`
    padding: 20px ${smallMobPageOffsetX};
  `};
`;

export const PageNotice = styled.div`
  ${flex({ justify: 'center', align: 'center' })};
  width: 100%;
  height: 100px;
  font-size: 30px;
`;

export const StatusContent = styled.div`
  padding: 8px 12px;
  border-radius: ${borderRadius};
  background-color: ${({ color }) => {
    if (color === 'error') return errorBg;
    return alabaster;
  }};
  color: ${({ color }) => {
    if (color === 'error') return persimmon;
    if (color === 'success') return jade;
    return silverChalice;
  }};
  font-size: 12px;
  line-height: 1;
  margin-left: 5px;
`;
