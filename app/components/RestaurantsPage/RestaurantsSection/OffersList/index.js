import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gold } from 'utils/colors';

import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import StyledOffersList from './StyledOffersList';
import OfferItem from './OfferItem';
import ButtonWrapper from './ButtonWrapper';
import Pagination from './Pagination';
import { SLIDE_TO_LEFT, SLIDE_MARGIN } from './constants';

export default class OffersList extends Component {
  static propTypes = {
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

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
        <ButtonWrapper onClick={this.scrollLeft}>
          <CircledItem width={28} color={gold}>
            <Icon name="arrow-right" size={12} />
          </CircledItem>
        </ButtonWrapper>
        <Pagination pages={offers.length} selectedPage={1} />
      </StyledOffersList>
    );
  }
}
