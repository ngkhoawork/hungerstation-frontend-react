import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { flex } from 'utils/css/styles';
import { borderRadius, border, boxShadow } from 'utils/css/variables';
import CheckboxIcon from 'components/CheckboxIcon';
import Icon from 'components/Icon';
import { Title } from 'components/Typography';

const Container = styled.div`
  ${flex({ align: 'center', wrap: 'wrap' })};
  padding: 10px 20px;
  border-radius: ${borderRadius};
  border: ${border};
  margin-bottom: 20px;
  box-shadow: ${({ isSelected }) => (isSelected ? boxShadow : 'none')};
  width: 100%;
  cursor: pointer;
`;

const LeftSide = styled.div`
  padding: 20px;
  ${flex({ shrink: 0 }, false)};
`;

const Content = styled.div`
  ${flex({ align: 'center', wrap: 'wrap' })};
  font-size: 18px;
  letter-spacing: 0.25px;
`;

const Block = styled.div`
  ${flex({ align: 'center' })};
`;

const titleStyle = {
  fontSize: 18,
  letterSpacing: 0.25,
  margin: '0 20px',
};

const OptionContainer = ({ isSelected, onSelect, icon, title, children }) => (
  <Container onClick={onSelect} isSelected={isSelected}>
    <LeftSide>
      <CheckboxIcon isChecked={isSelected} />
    </LeftSide>
    <Content>
      <Block>
        <Icon name={icon} size={26} />
        <Title style={titleStyle}>{title}</Title>
      </Block>
      {children}
    </Content>
  </Container>
);

OptionContainer.propTypes = {
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default OptionContainer;
