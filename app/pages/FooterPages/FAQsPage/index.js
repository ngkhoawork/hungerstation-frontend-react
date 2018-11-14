import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { NavHeader } from 'utils/css/styledComponents';
=======
import values from 'lodash/values';

>>>>>>> change fetching data
import PageContent from 'components/PageContent';
import Back from 'containers/Back';
import FAQs from 'components/FAQs';
import { fetchFaqs } from 'modules/faqs/actions';
import { selectGroupState } from 'modules/faqs/selectors';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';

class FAQsPage extends React.Component {
  componentDidMount() {
    this.props.fetchFaqs();
  }

  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        <NavHeader>
          <Back />
        </NavHeader>
        <PageContent>
          <FAQs faqsGroups={this.props.faqsState} />
        </PageContent>
      </React.Fragment>
=======
      <PageContent>
        <Back />
        <FAQs faqsGroups={values(this.props.faqsState.faqs)} />
      </PageContent>
>>>>>>> change fetching data
    );
  }
}

FAQsPage.propTypes = {
  fetchFaqs: PropTypes.func.isRequired,
  faqsState: PropTypes.object.isRequired,
};

export default withHeaderAndFooter(
  connect(
    state => ({ faqsState: selectGroupState(state) }),
    { fetchFaqs },
  )(FAQsPage),
);
