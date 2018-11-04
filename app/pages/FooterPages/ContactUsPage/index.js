import React from 'react';

// import ContactUsFormContainer from 'containers/ContactUsFormContainer';
import { withHeaderAndFooter } from 'hocs/withInsertLayout';

import ContactDetails from 'components/ContactDetails';
import MapHS from 'components/MapHS';
import LocationInformation from 'components/MapHS/LocationInformation';
import Back from 'components/Back';

import PageContent from 'components/PageContent';

import {
  Wrapper,
  BottomSide,
  UpperSide,
  Description,
  ContactUs,
} from './StyledComponents';

const ContactUsPage = () => (
  <PageContent>
    <Back />
    <Wrapper>
      <UpperSide>
        <MapHS />
        <Description>
          <LocationInformation />
        </Description>
      </UpperSide>

      <BottomSide>
        {/* display none for now */}
        {/* <ContactUsFormContainer /> */}
        <ContactUs>
          <ContactDetails />
        </ContactUs>
      </BottomSide>
    </Wrapper>
  </PageContent>
);

export default withHeaderAndFooter(ContactUsPage);
