import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gold } from 'utils/colors';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import slickSettings from 'utils/slickSettings';

import Icon from 'components/Icon';
import CircledItem from 'components/CircledItem';
import StyledOffersList from './StyledOffersList';
import OfferItem from './OfferItem';
import ButtonWrapper from './ButtonWrapper';
import Pagination from './Pagination';

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

  state = {
    currentSlide: 0,
  };

  handleAfterChange = currentSlide => {
    this.setState({ currentSlide });
  };

  render() {
    const { offers } = this.props;
    const { currentSlide } = this.state;
    return (
      <StyledOffersList>
        <Slider
          afterChange={this.handleAfterChange}
          {...slickSettings}
          nextArrow={
            <ButtonWrapper>
              <CircledItem width={28} color={gold}>
                <Icon name="arrow-right" size={12} />
              </CircledItem>
            </ButtonWrapper>
          }
        >
          {offers.map(offer => <OfferItem key={offer.id} {...offer} />)}
        </Slider>
        <Pagination selectedPage={currentSlide + 1} pages={offers.length} />
      </StyledOffersList>
    );
  }
}
