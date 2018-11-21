import React from 'react';
import PropTypes from 'prop-types';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import { StyledLink } from 'utils/css/styledComponents';
import { wildSand, boulder } from 'utils/css/colors';
import { StyledMenu, StyledSubMenu } from './StyledComponents';

const SubMenu = ({ items, onItemClick, ...props }) => (
  <StyledSubMenu className="fadeIn" {...props}>
    {items.map(item => (
      <StyledLink key={item.id} to={item.to} onClick={onItemClick}>
        <StyledMenu>
          {item.icon && (
            <CircledItem color={wildSand} width={24} withShadow>
              <Icon name={item.icon} />
            </CircledItem>
          )}
          <span style={{ fontSize: 14, color: boulder }}>{item.label}</span>
        </StyledMenu>
      </StyledLink>
    ))}
  </StyledSubMenu>
);

SubMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SubMenu;
