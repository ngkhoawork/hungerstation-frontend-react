import React from 'react';
// import ContactUsFormContainer from 'containers/ContactUsFormContainer';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';
import ContactDetails from 'components/ContactDetails';
import MapHS from 'components/MapHS';
import LocationInformation from 'components/MapHS/LocationInformation';
import Back from 'containers/Back';
import PageContent from 'components/PageContent';
import { NavHeader } from 'utils/css/styledComponents';
import { Wrapper, BottomSide, UpperSide, mapStyles } from './StyledComponents';

const ContactUsPage = () => (
  <PageContent>
    <NavHeader>
      <Back />
    </NavHeader>
    <Wrapper>
      <UpperSide>
        <MapHS css={mapStyles} />
        <LocationInformation />
      </UpperSide>
      <BottomSide>
        {/* display none for now */}
        {/* <ContactUsFormContainer /> */}
        <ContactDetails />
      </BottomSide>
    </Wrapper>
  </PageContent>
);

export default withHeaderAndFooter(ContactUsPage);
