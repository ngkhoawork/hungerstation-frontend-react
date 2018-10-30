import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { flex } from 'utils/css/styles';
import { gold } from 'utils/css/colors';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import { Title } from 'components/Typography';

const ModalFrame = ({ title, onCancel, children, style }) => (
  <Container style={style}>
    <Header>
      <Title>{title}</Title>
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
};

export default ModalFrame;

const Container = styled.div`
  position: relative;
  padding: 20px 20px 30px;
  background: white;
  width: max-content;
  ${flex({ direction: 'column' })};

  ${({ style }) => style && css(style)};
`;

const Header = styled.div`
  align-self: center;
  margin-bottom: 20px;
`;

const CloseBtnStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
};
