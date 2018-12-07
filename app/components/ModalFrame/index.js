import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  flex,
  mediaMedium,
  sideMargin,
  sidePadding,
  sideModal,
} from 'utils/css/styles';
import {
  maxModalWidth,
  maxModalHeight,
  borderRadius,
} from 'utils/css/variables';
import Icon from 'components/Icon';
import { Title, Description } from 'components/Typography';

const ModalFrame = ({
  title,
  subtitle,
  onCancel,
  children,
  headerStyle,
  headerCss,
  subtitleCss,
  ...props
}) => (
  <Container {...props}>
    <Header style={headerStyle} css={headerCss}>
      <Title>{title}</Title>
      <Description style={{ marginTop: 16 }} css={subtitleCss}>
        {subtitle}
      </Description>
      <CloseBtn>
        <Icon name="close-modal" onClick={onCancel} style={CloseBtnStyle} />
      </CloseBtn>
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
  ${sideModal()};
  position: relative;
  padding-top: 28px;
  padding-bottom: 30px;
  ${sidePadding('start', '25px')};
  ${sidePadding('end', '40px')};
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
  margin-bottom: 14px;
  padding-bottom: 10px;
  text-align: center;
  width: calc(100% - 40px);
  ${sideMargin('end', '40px')};
  flex-shrink: 0;

  ${({ style }) => style && css(style)};
  ${({ css }) => css};
`;
const CloseBtn = styled.div`
  ${sidePadding('start', 'calc(100% + 30px)')};
`;
const CloseBtnStyle = {
  position: 'absolute',
  top: '16px',
};
