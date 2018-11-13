import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChevronIcon from 'components/ChevronIcon';
import { Container, Header, Title, Hint, Content } from './StyledComponents';

class Section extends Component {
  state = { isOpen: true };

  handleToggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    const { isCollapsible, title, hint, children } = this.props;
    const { isOpen } = this.state;

    return (
      <Container>
        <Header>
          <Title>{title}</Title>
          <div>
            {hint && <Hint>{hint}</Hint>}
            {isCollapsible ? (
              <ChevronIcon isOpen={isOpen} onClick={this.handleToggle} />
            ) : null}
          </div>
        </Header>
        <Content isOpen={isOpen}>{children}</Content>
      </Container>
    );
  }
}

Section.propTypes = {
  isCollapsible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  hint: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Section;
