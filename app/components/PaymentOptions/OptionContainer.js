import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { flex, mediaMedium, sidePadding, sideMargin } from 'utils/css/styles';
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

const Main = styled.div`
  ${flex({ align: 'center' })};
`;

const LeftSide = styled.div`
  padding: 20px;
  height: 60px;
  ${flex({ shrink: 0 }, false)};

  ${mediaMedium`
    ${sidePadding('start', '0')};
  `};
`;

const Content = styled.div`
  ${flex({ align: 'center', wrap: 'wrap' })};
  font-size: 18px;
  letter-spacing: 0.25px;
`;

const Block = styled.div`
  ${flex({ align: 'center' })};
`;

const titleStyle = css`
  font-size: 18px;
  letter-spacing: 0.25px;
  margin-top: 0;
  ${sideMargin('end', '0')};
  margin-bottom: 0;
  ${sideMargin('start', '20px')};
`;

const OptionContainer = ({ isSelected, onSelect, icon, title, children }) => (
  <Container onClick={onSelect} isSelected={isSelected}>
    <Main>
      <LeftSide>
        <CheckboxIcon isChecked={isSelected} />
      </LeftSide>
      <Block>
        <Icon name={icon} size={26} />
        <Title css={titleStyle}>{title}</Title>
      </Block>
    </Main>
    <Content>{children}</Content>
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
