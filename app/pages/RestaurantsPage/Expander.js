import React from 'react';
import { element, string } from 'prop-types';
import styled from 'styled-components';
import { wildSand } from 'utils/css/colors';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

class Expander extends React.Component {
  state = { expanded: false };

  handleExpand = () => this.setState(ps => ({ expanded: !ps.expanded }));

  render() {
    const { expanded } = this.state;
    const { children, label = 'Tags' } = this.props;
    return (
      <Wrapper>
        <Row onClick={this.handleExpand}>
          <Paragraph size={18}>{label}</Paragraph>
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
};

export default Expander;

const Wrapper = styled.div`
  width: 100%;
  min-height: 48px;
  border-bottom: 1px solid ${wildSand};
  overflow: hidden;
  padding: 24px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: none;
  ${({ expanded }) => expanded && 'display: block'};
`;
