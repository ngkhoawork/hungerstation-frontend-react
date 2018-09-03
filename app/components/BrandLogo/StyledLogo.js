import styled from 'styled-components';

import StyledBrandDetails from 'components/RestaurantsPage/RestaurantsSection/OffersList/OfferItem/BrandDetails/StyledBrandDetails';

const StyledLogo = styled.img`
  width: 26px;
  height: 26px;
  padding: 3px;
  border-radius: 13px;
  background-color: white;
  margin-right: 20px;
  ${StyledBrandDetails} && {
    margin-bottom: 4px;
  }
`;

export default StyledLogo;
