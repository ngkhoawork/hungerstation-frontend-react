/**
 *
 * Breadcrumbs
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withSelectedLocation from 'hocs/withSelectedLocation';

import Icon from 'components/Icon';
import ButtonLink from 'components/ButtonLink';
import { BreadcrumbsStyled } from './BreadcrumbsStyled';

const defaultRoute = [
  {
    key: 'home',
    to: '/',
    label: 'Home',
  },
];

const defaultFilters = [
  {
    key: 'all-cuisines',
    to: '/',
    label: 'All cuisines',
  },
  {
    key: 'all-delivery-types',
    to: '/',
    label: 'All delivery types',
  },
];

const Breadcrumbs = ({ crumbs, location, filters }) => (
  <BreadcrumbsStyled>
    <ul>
      {crumbs.map(item => (
        <Fragment key={item.key}>
          {crumbs.length && (
            <Fragment>
              <li key={item.key}>
                <Link to={item.to}>{item.label}</Link>
              </li>
              <li>
                <Icon name="dot-crumbs" size={4} />
              </li>
            </Fragment>
          )}
        </Fragment>
      ))}
      {location &&
        location.map(item => (
          <Fragment key={item.get('id')}>
            <li>
              <Link to={item.get('name')}>{item.get('name')}</Link>
            </li>
            <li>
              <Icon name="dot-crumbs" size={4} />
            </li>
          </Fragment>
        ))}
      {/* Filters */}
      {filters &&
        filters.map(item => (
          <li key={item.key}>
            <ButtonLink to={item.to}>{item.label}</ButtonLink>
          </li>
        ))}
    </ul>
  </BreadcrumbsStyled>
);

Breadcrumbs.propTypes = {
  crumbs: PropTypes.array,
  location: PropTypes.array,
  filters: PropTypes.array,
};
Breadcrumbs.defaultProps = {
  crumbs: defaultRoute,
  location: [],
  filters: defaultFilters,
};

export default withSelectedLocation(Breadcrumbs);
