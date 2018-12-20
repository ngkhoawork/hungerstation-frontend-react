import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import intl from 'utils/intlService';
import withSelectedLocationAndFilters from 'hocs/withSelectedLocationAndFilters';
import { BreadcrumbsStyled } from './BreadcrumbsStyled';
import messages from './messages';

const defaultRoute = [
  {
    key: 'home',
    to: '/',
    label: intl.formatMessage(messages.home),
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

// TODO: logic for link creation has to be revised!!
const Breadcrumbs = ({ crumbs, city, district, filters, branch, ...props }) => {
  const {
    params: { city: citySlug, district: districtSlug, branchId },
  } = props.match;

  return (
    <BreadcrumbsStyled>
      <ul>
        {crumbs.map(item => (
          <li key={item.key}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
        {city && (
          <li>
            <Link to={`/restaurants/${citySlug}/${districtSlug}`}>
              {city.get('name')}
            </Link>
          </li>
        )}
        {district && (
          <li>
            <Link to={`/restaurants/${citySlug}/${districtSlug}`}>
              {district.get('name')}
            </Link>
          </li>
        )}
        {filters.map(item => (
          <li key={item.key}>
            <span>{item.label}</span>
          </li>
        ))}
        {branchId && branchId === branch.id ? (
          <li>
            <Link
              to={`/restaurants/${citySlug}/${districtSlug}/restaurant/${branchId}`}
            >
              {branch.restaurant.name}
            </Link>
          </li>
        ) : null}
        {props.location.pathname.includes('/checkout') ? (
          <li>
            <Link
              to={`/restaurants/${citySlug}/${districtSlug}/restaurant/${branchId}/checkout`}
            >
              {intl.formatMessage(messages.checkout)}
            </Link>
          </li>
        ) : null}
      </ul>
    </BreadcrumbsStyled>
  );
};

Breadcrumbs.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  crumbs: PropTypes.array,
  city: PropTypes.object,
  district: PropTypes.object,
  filters: PropTypes.array,
  branch: PropTypes.object,
};
Breadcrumbs.defaultProps = {
  crumbs: defaultRoute,
  filters: defaultFilters,
};

export default withRouter(withSelectedLocationAndFilters(Breadcrumbs));
