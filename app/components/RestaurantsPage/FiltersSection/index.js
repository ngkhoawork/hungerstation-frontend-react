import React from 'react';
import PropTypes from 'prop-types';
import { filtersCategoryPropTypes } from 'props/filters';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';

import Header from './Header';
import Category from './Category';
import Tags from './Tags';
import Cuisines from './Cuisines';
import DeliveryTypes from './DeliveryTypes';
import Orders from './Orders';
import ButtonWrapper from './ButtonWrapper';
import ActionsWrapper from './ActionsWrapper';
import ContentWrapper from './ContentWrapper';

const FiltersSection = ({
  tags,
  cuisines,
  deliveryTypes,
  toggleSection,
  isModalOpened,
  closeModal,
}) => (
  <React.Fragment>
    <Header isModalOpened={isModalOpened} closeModal={closeModal} />
    <ContentWrapper>
      <Category
        title="Tags"
        isSectionExpanded={tags.isExpanded}
        toggleSection={() => toggleSection('tags')}
      >
        <Tags tags={tags} />
      </Category>
      <Category
        title="Cuisines"
        isSectionExpanded={cuisines.isExpanded}
        toggleSection={() => toggleSection('cuisines')}
      >
        <Cuisines cuisines={cuisines} />
      </Category>
      <Category
        title="Order"
        isSectionExpanded={deliveryTypes.isExpanded}
        toggleSection={() => toggleSection('deliveryTypes')}
      >
        <Orders />
      </Category>
      <Category
        title="Delivery Types"
        isSectionExpanded={deliveryTypes.isExpanded}
        toggleSection={() => toggleSection('deliveryTypes')}
      >
        <DeliveryTypes types={deliveryTypes} />
      </Category>
    </ContentWrapper>
    <ActionsWrapper>
      <Group>
        <Icon name="delete" size={12} />
        <Paragraph margin="0 0 0 5px">Clear</Paragraph>
      </Group>

      <ButtonWrapper isModalOpened={isModalOpened}>
        <Button primary label="Apply">
          <Icon name="check" />
        </Button>
      </ButtonWrapper>
    </ActionsWrapper>
  </React.Fragment>
);

FiltersSection.propTypes = {
  tags: filtersCategoryPropTypes,
  cuisines: filtersCategoryPropTypes,
  deliveryTypes: filtersCategoryPropTypes,
  toggleSection: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default FiltersSection;
