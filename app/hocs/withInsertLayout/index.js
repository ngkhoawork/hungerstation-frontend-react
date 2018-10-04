import React, { Fragment } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const withInsertLayout = ({
  header = { display: true },
  footer = { display: true },
}) => Component => props => (
  <Fragment>
    {header.display && <Header variant={header.variant} />}

    <Component {...props} />

    {footer.display && <Footer />}
  </Fragment>
);

export default withInsertLayout;

export const withDarkHeaderOnly = withInsertLayout({
  header: { display: true, variant: 'dark' },
  footer: { display: false },
});

export const withHeaderAndFooter = withInsertLayout({
  header: { display: true, variant: 'gold' },
});
