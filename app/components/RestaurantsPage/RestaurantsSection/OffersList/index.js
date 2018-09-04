import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import StyledOffersList from './StyledOffersList';
import OfferItem from './OfferItem';
import StyledNextButton from './StyledNextButton';
import Pagination from './Pagination';
import { SLIDE_TO_LEFT, SLIDE_MARGIN } from './constants';

class OffersList extends Component {
  constructor(props) {
    super(props);
    this.sliderContainer = React.createRef();
  }

  scrollLeft = () => {
    this.sliderContainer.current.scrollLeft += SLIDE_TO_LEFT + SLIDE_MARGIN;
  };

  render() {
    const { offers } = this.props;
    return (
      <StyledOffersList innerRef={this.sliderContainer}>
        {offers.map(offer => <OfferItem key={offer.id} {...offer} />)}
        <StyledNextButton onClick={this.scrollLeft}>
          <Icon name="arrow-right" size={12} />
        </StyledNextButton>
        <Pagination pages={offers.length} selectedPage={1} />
      </StyledOffersList>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OffersList;
