import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { flex, mediaMedium } from 'utils/css/styles';
import { gold } from 'utils/css/colors';
import {
  maxModalWidth,
  maxModalHeight,
  borderRadius,
} from 'utils/css/variables';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import { Title, Description } from 'components/Typography';

const ModalFrame = ({
  title,
  subtitle,
  onCancel,
  children,
  headerStyle,
  headerCss,
  ...props
}) => (
  <Container {...props}>
    <Header style={headerStyle} css={headerCss}>
      <Title>{title}</Title>
      <Description style={{ margin: '3px 0' }}>{subtitle}</Description>
      <CircledItem
        color={gold}
        width={30}
        onClick={onCancel}
        style={CloseBtnStyle}
      >
        <Icon name="close" size={8} />
      </CircledItem>
    </Header>
    {children}
  </Container>
);

ModalFrame.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  onCancel: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isFullscreen: PropTypes.bool,
  isMobileFullscreen: PropTypes.bool,
};

export default ModalFrame;

const fullscreen = css`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  border-radius: 0;
`;

const Container = styled.div`
  position: relative;
  padding: 20px 20px 30px;
  background: white;
  width: max-content;
  ${flex({ direction: 'column' })};
  max-width: ${maxModalWidth};
  max-height: ${maxModalHeight};
  border-radius: ${borderRadius};

  ${({ isFullscreen }) => isFullscreen && fullscreen};
  ${({ isMobileFullscreen }) => isMobileFullscreen && mediaMedium(fullscreen)};

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

const Header = styled.div`
  align-self: center;
  margin-bottom: 10px;
  text-align: center;
  width: calc(100% - 40px);
  margin-right: 40px;

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;

const CloseBtnStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
};
