import React from 'react';
import PropTypes from 'prop-types';

import { filtersCategoryPropTypes } from 'props/filters';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import StyledAction from '../FiltersSection/Cuisines/StyledAction';
import StyledMobileFiltersSection from './StyledMobileFiltersSection';
import Header from '../FiltersSection/Header';
import Category from '../FiltersSection/Category';
import Tags from '../FiltersSection/Tags';
import Cuisines from '../FiltersSection/Cuisines';
import DeliveryTypes from '../FiltersSection/DeliveryTypes';
import Orders from '../FiltersSection/Orders';

const MobileFiltersSection = ({
  tags,
  cuisines,
  deliveryTypes,
  openModal,
  isModalOpened,
}) => (
  <StyledMobileFiltersSection>
    <Header />
    <Category title="Tags">
      <Tags tags={tags} />
    </Category>
    {!isModalOpened && (
      <StyledAction onClick={openModal}>
        <Paragraph>More Filters</Paragraph>
        <Icon name="arrow-circled" size={13} />
      </StyledAction>
    )}
    {isModalOpened && (
      <React.Fragment>
        <Category title="Cuisines">
          <Cuisines cuisines={cuisines} />
        </Category>
        <Category title="Order">
          <Orders />
        </Category>
        <Category title="Delivery Types">
          <DeliveryTypes types={deliveryTypes} />
        </Category>
      </React.Fragment>
    )}
  </StyledMobileFiltersSection>
);

MobileFiltersSection.propTypes = {
  tags: filtersCategoryPropTypes,
  cuisines: filtersCategoryPropTypes,
  deliveryTypes: filtersCategoryPropTypes,
  openModal: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
};

export default MobileFiltersSection;
