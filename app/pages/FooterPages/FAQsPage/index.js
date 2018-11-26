import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavHeader } from 'utils/css/styledComponents';
import values from 'lodash/values';

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
    const defaultView = values(this.props.faqsState.faqs[2]);
    return (
      <React.Fragment>
        <NavHeader isWithOffset>
          <Back />
        </NavHeader>
        <PageContent>
          <FAQs
            faqsGroups={values(this.props.faqsState.faqs)}
            id={defaultView[1]}
            title={defaultView[2]}
            content={defaultView[0]}
          />
        </PageContent>
      </React.Fragment>
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
