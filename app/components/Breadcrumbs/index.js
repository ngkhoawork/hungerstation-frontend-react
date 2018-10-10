/**
 *
 * Breadcrumbs
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

const Breadcrumbs = ({ crumbs }) => (
  <BreadcrumbsStyled>
    <ul>
      {crumbs.map((item, i) => (
        <Fragment key={item.key}>
          {i !== crumbs.length - 1 && (
            <Fragment>
              <li key={item.key}>
                <Link to={item.to}>{item.label}</Link>
              </li>
              <li>
                <Icon name="dot-crumbs" size={4} />
              </li>
            </Fragment>
          )}
          {i === crumbs.length - 1 && (
            <li>
              <ButtonLink to={item.to}>{item.label}</ButtonLink>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  </BreadcrumbsStyled>
);

Breadcrumbs.propTypes = {
  crumbs: PropTypes.array,
};
Breadcrumbs.defaultProps = {
  crumbs: defaultRoute,
};

export default Breadcrumbs;
