import React from 'react';
import PropTypes from 'prop-types';

import Paragraph from 'components/Paragraph';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import { StyledLink } from 'utils/css/styledComponents';
import { wildSand, boulder } from 'utils/css/colors';
import StyledMenu from './StyledMenu';
import StyledSubMenu from './StyledSubMenu';

const SubMenu = ({ items }) => (
  <StyledSubMenu className="fadeIn">
    {items.map(item => (
      <StyledLink key={item.id} to={item.to}>
        <StyledMenu>
          {item.icon && (
            <CircledItem color={wildSand} width={24} withShadow>
              <Icon name="bag" />
            </CircledItem>
          )}
          <Paragraph size={14} color={boulder}>
            {item.label}
          </Paragraph>
        </StyledMenu>
      </StyledLink>
    ))}
  </StyledSubMenu>
);

SubMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SubMenu;
