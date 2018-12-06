import React from 'react';
import intl from 'utils/intlService';
import animationData from './data.json';
import messages from './messages';
import { Container, Spinner, Label } from './StyledComponents';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.loaderRef = React.createRef();
  }

  componentDidMount() {
    this.loaderAnimation = window.lottie.loadAnimation({
      container: this.loaderRef.current,
      animationData,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  }

  componentWillUnmount() {
    this.loaderAnimation.destroy();
  }

  render() {
    const { label } = this.props;

    return (
      <Container {...this.props}>
        <Spinner innerRef={this.loaderRef} />
        <Label>{label || intl.formatMessage(messages.loading)}</Label>
      </Container>
    );
  }
}

export default Loader;
