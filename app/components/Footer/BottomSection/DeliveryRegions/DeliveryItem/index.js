import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { slugify } from 'utils/helpers';

import StyledItem from './StyledItem';
import Title from './Title';
import Region from './Region';
import Description from './Description';

const DeliveryItem = ({ title, city, districts }) => (
  <StyledItem>
    <Title>
      {title}
      <Region>{city.name}</Region>
    </Title>
    <Description>
      {districts.map((district, i) => (
        <Fragment>
          {!!i && ', '}
          <Link
            to={`/restaurants/${slugify(city.name)}/${slugify(district.name)}`}
          >
            {district.name}
          </Link>
        </Fragment>
      ))}
    </Description>
  </StyledItem>
);

DeliveryItem.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.object.isRequired,
  districts: PropTypes.array.isRequired,
};

export default DeliveryItem;
