import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { compose, withState, withHandlers, withProps } from 'recompose';
import { selectCities } from 'modules/location/selectors';
import { selectCityAction } from 'modules/location/actions';
import { forwardTo } from 'utils/route';
import { createStructuredSelector } from 'reselect';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';
import intl from 'utils/intlService';
import StyledContainer from './StyledContainer';
import DeliveryItem from './DeliveryItem';
import StyledAction from '../DeliveryRegionsMobile/StyledAction';
import messages from '../DeliveryRegionsMobile/messages';

const handleScrollToTop = () => {
  document.querySelector('html').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
const withExpand = compose(
  withState('expanded', 'expand', false),
  withHandlers({
    toggle: ({ expand }) => () => expand(current => !current),
  }),
);

const DeliveryRegions = ({ cities, onClick, expanded, toggle, mobile }) => [
  mobile && (
    <Paragraph size={16}>{intl.formatMessage(messages.header)}</Paragraph>
  ),
  <StyledContainer>
    {!!cities &&
      cities.map(city => (
        <DeliveryItem
          key={`delivery-region-${city.get('name')}`}
          name={city.get('name')}
          onClick={onClick(city)}
        />
      ))}
    {mobile && (
      <StyledAction onClick={toggle}>
        <Paragraph>
          {intl.formatMessage(messages[expanded ? 'seeLess' : 'seeMore'])}
        </Paragraph>
        <Icon name="tick" />
      </StyledAction>
    )}
  </StyledContainer>,
];

DeliveryRegions.propTypes = {
  cities: ImmutablePropTypes.list.isRequired,
  onClick: PropTypes.func.isRequired,
  expanded: PropTypes.bool,
  toggle: PropTypes.func,
  mobile: PropTypes.bool,
};
const enchanced = compose(
  withExpand,
  connect(
    createStructuredSelector({
      cities: selectCities,
    }),
    dispatch => ({
      onClick: city => () => {
        dispatch(selectCityAction(city.toJS()));
        handleScrollToTop();
        forwardTo('/');
      },
    }),
  ),
  withProps(({ cities, mobile, expanded }) => {
    if (!mobile) {
      return { cities };
    }

    return {
      cities: expanded ? cities : cities.slice(0, 9),
    };
  }),
);

export default enchanced(DeliveryRegions);
