import React from 'react';
import styled from 'styled-components';
import { flexBox, mediaLess, mediaGreater } from 'utils/css/styles';

import OffersListContainer from 'containers/OffersListContainer';
import FiltersContainer from 'containers/FiltersContainer';
import RestaurantsListContainer from 'containers/RestaurantsListContainer';
import Paragraph from 'components/Paragraph';
import Section from './Section';
import RestaurantsHeader from './RestaurantsHeader';
import BriefFiltersSection from '../BriefFiltersSection';

const RestaurantsSection = () => {
  const restaurantsListSectionRef = React.createRef();
  return (
    <Wrapper>
      <Section>
        <Paragraph size={30}>Top offers</Paragraph>
        <OffersListContainer />
      </Section>

      <Section innerRef={restaurantsListSectionRef}>
        <RestaurantsHeader />
        <BriefFiltersWrapper>
          <FiltersContainer>
            {props => <BriefFiltersSection {...props} />}
          </FiltersContainer>
        </BriefFiltersWrapper>
        <RestaurantsListContainer sectionRef={restaurantsListSectionRef} />
      </Section>
    </Wrapper>
  );
};

export default RestaurantsSection;

const Wrapper = styled.div`
  ${flexBox(
    {
      align: 'flex-start',
      justify: 'flex-start',
      direction: 'column',
    },
    `
  width: 936px;
  overflow: visible;
  position: relative;
`,
  )};
  ${mediaLess(1000)`
  flex: 1;
`};
  ${mediaLess(600)`
  padding: 0;
`};
`;

const BriefFiltersWrapper = styled.div`
  width: 100%;
  padding-right: 20px;
  ${mediaGreater(1000)`
    display: none;
  `};
`;
