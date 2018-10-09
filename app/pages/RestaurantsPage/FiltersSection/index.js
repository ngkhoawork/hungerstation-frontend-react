import React from 'react';
import PropTypes from 'prop-types';
import { filtersCategoryPropTypes } from 'propTypes/filters';

import Button from 'components/Button';
import Icon from 'components/Icon';
import Group from 'components/Group';
import Paragraph from 'components/Paragraph';
import intl from 'utils/intlService';

import Header from './Header';
import Category from './Category';
import Tags from './Tags';
import Cuisines from './Cuisines';
import DeliveryTypes from './DeliveryTypes';
import Orders from './Orders';
import ButtonWrapper from './ButtonWrapper';
import ActionsWrapper from './ActionsWrapper';
import ContentWrapper from './ContentWrapper';
import messages from './messages';

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
        title={intl.formatMessage(messages.tags)}
        isSectionExpanded={tags.get('isExpanded')}
        toggleSection={() => toggleSection('tags')}
      >
        <Tags tags={tags} />
      </Category>
      <Category
        title={intl.formatMessage(messages.cuisines)}
        isSectionExpanded={cuisines.get('isExpanded')}
        toggleSection={() => toggleSection('cuisines')}
      >
        <Cuisines cuisines={cuisines} />
      </Category>
      <Category
        title={intl.formatMessage(messages.tags)}
        isSectionExpanded={deliveryTypes.get('isExpanded')}
        toggleSection={() => toggleSection('deliveryTypes')}
      >
        <Orders />
      </Category>
      <Category
        title={intl.formatMessage(messages.deliveryType)}
        isSectionExpanded={deliveryTypes.get('isExpanded')}
        toggleSection={() => toggleSection('deliveryTypes')}
      >
        <DeliveryTypes types={deliveryTypes} />
      </Category>
    </ContentWrapper>
    <ActionsWrapper>
      <Group>
        <Icon name="delete" size={12} />
        <Paragraph margin="0 0 0 5px">
          {intl.formatMessage(messages.clear)}
        </Paragraph>
      </Group>

      <ButtonWrapper isModalOpened={isModalOpened}>
        <Button primary label={intl.formatMessage(messages.buttonApply)}>
          <Icon name="checkmark" />
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
