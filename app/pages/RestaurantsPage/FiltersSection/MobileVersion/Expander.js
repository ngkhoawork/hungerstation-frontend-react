import React from 'react';
import { element, string, number, bool } from 'prop-types';
import styled from 'styled-components';
import { wildSand } from 'utils/css/colors';
import Icon from 'components/Icon';
import CategoryTitle from '../CategoryTitle';

class Expander extends React.Component {
  state = { expanded: false };

  handleExpand = () => this.setState(ps => ({ expanded: !ps.expanded }));

  render() {
    const { expanded } = this.state;
    const {
      children,
      label = 'Tags',
      quantity = 0,
      withoutQuantity = false,
    } = this.props;
    return (
      <Wrapper>
        <Row onClick={this.handleExpand}>
          <CategoryTitle
            title={label}
            selectionQuantity={quantity}
            withoutQuantity={withoutQuantity || !expanded}
          />
          <Icon name="arrow-circled" size={16} />
        </Row>
        <Content expanded={expanded}>{children}</Content>
      </Wrapper>
    );
  }
}

Expander.propTypes = {
  children: element,
  label: string,
  quantity: number,
  withoutQuantity: bool,
};

export default Expander;

const Wrapper = styled.div`
  width: 100%;
  min-height: 48px;
  border-bottom: 1px solid ${wildSand};
  overflow: hidden;
  margin-bottom: 12px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  display: none;
  ${({ expanded }) => expanded && 'display: block'};
`;
