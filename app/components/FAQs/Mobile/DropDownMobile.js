import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowMoreIcon from './ShowMoreIcon';
import { Container, Header, Title, Content } from './StyledComponents';

class DropDownMobile extends Component {
  state = { isOpen: false };

  handleToggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    const { isCollapsible, title, children } = this.props;
    const { isOpen } = this.state;

    return (
      <Container>
        <Header>
          <Title>{title}</Title>
          <div>
            {isCollapsible ? (
              <ShowMoreIcon isOpen={isOpen} onClick={this.handleToggle} />
            ) : null}
          </div>
        </Header>
        <Content isOpen={isCollapsible && isOpen} onClick={this.handleToggle}>
          {children}
        </Content>
      </Container>
    );
  }
}

DropDownMobile.propTypes = {
  isCollapsible: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default DropDownMobile;
