import React from 'react';
import PropTypes from 'prop-types';
import CircledItem from 'components/CircledItem';
import Icon from 'components/Icon';
import { StyledLink, StyledLinkBtn } from 'utils/css/styledComponents';
import { wildSand, boulder } from 'utils/css/colors';
import { StyledMenu, StyledSubMenu } from './StyledComponents';

const SubMenu = ({ items, onItemClick, ...props }) => {
  const renderItem = item => {
    const Wrapper = item.to ? StyledLink : StyledLinkBtn;

    return (
      <Wrapper
        key={item.id}
        to={item.to || '#'}
        onClick={() => onItemClick(item)}
      >
        <StyledMenu>
          {item.icon && (
            <CircledItem color={wildSand} width={24} withShadow>
              <Icon name={item.icon} />
            </CircledItem>
          )}
          <span style={{ fontSize: 14, color: boulder }}>{item.label}</span>
        </StyledMenu>
      </Wrapper>
    );
  };

  return (
    <StyledSubMenu className="fadeIn" {...props}>
      {items.map(renderItem)}
    </StyledSubMenu>
  );
};

SubMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SubMenu;
