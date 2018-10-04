import React, { Fragment } from 'react';

import Footer from 'components/Footer';
import StyledPage from './StyledPage';
import UpperSection from './UpperSection';
import BottomSection from './BottomSection';

const HomePage = () => (
  <Fragment>
    <StyledPage>
      <UpperSection />
      <BottomSection />
    </StyledPage>
    <Footer />
  </Fragment>
);

export default HomePage;
