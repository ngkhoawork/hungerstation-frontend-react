import React from 'react';
import styled from 'styled-components';
import { flexBox, mediaLess, mediaGreater } from 'utils/css/styles';

// import OffersListContainer from 'containers/OffersListContainer';
import RestaurantsListContainer from 'containers/RestaurantsListContainer';
import RestaurantsHeader from './RestaurantsHeader';
// import Paragraph from 'components/Paragraph';
import Section from './Section';
import BriefFiltersSection from '../BriefFiltersSection';

const RestaurantsSection = () => {
  const topRef = React.createRef();

  const handleScrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Wrapper>
      {/* <Section>
        <Paragraph size={30}>Top offers</Paragraph>
        <OffersListContainer />
      </Section> */}

      <Section innerRef={topRef}>
        <RestaurantsHeader />
        <BriefFiltersWrapper>
          <BriefFiltersSection />
        </BriefFiltersWrapper>
        <RestaurantsListContainer handleScrollToTop={handleScrollToTop} />
      </Section>
    </Wrapper>
  );
};

export default RestaurantsSection;

const Wrapper = styled.div`
  width: 912px;
  overflow: visible;
  position: relative;
  ${flexBox({
    align: 'flex-start',
    justify: 'flex-start',
    direction: 'column',
  })};

  ${mediaLess(1000)`
    flex: 1;
  `};

  ${mediaLess(600)`
    padding: 0;
    width:100%
  `};
`;

const BriefFiltersWrapper = styled.div`
  width: 100%;
  padding-right: 20px;
  ${mediaGreater(1000)`
    display: none;
  `};
`;
