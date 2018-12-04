import React, { Fragment } from 'react';
import AppHeader from 'containers/AppHeader';
import Footer from 'components/Footer';
import StyledPage from './StyledPage';
import UpperSection from './UpperSection';
import BottomSection from './BottomSection';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.upperSectionRef = React.createRef();
    this.intersectObserver = new IntersectionObserver(this.handleIntersect);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.intersectObserver.observe(this.upperSectionRef.current);
  }

  componentWillUnmount() {
    this.intersectObserver.disconnect();
  }

  handleIntersect = entries =>
    this.setState({ isSlidingHeaderShown: !entries[0].isIntersecting });

  render() {
    return (
      <Fragment>
        <AppHeader
          variant="gold"
          isFixed
          isShown={this.state.isSlidingHeaderShown}
        />
        <StyledPage>
          <UpperSection
            innerRef={this.upperSectionRef}
            // closing dropdown in upper section if fixed header is shown,
            // just for the sake of a better UX.
            isProfileDropdownClosed={this.state.isSlidingHeaderShown}
          />
          <BottomSection />
        </StyledPage>
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
