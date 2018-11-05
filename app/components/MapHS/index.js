import React, { Component } from 'react';

import styled from 'styled-components';
import { mediaLess } from 'utils/css/styles';

class MapHS extends Component {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 24.817629257410555, lng: 46.6416639907593 },
      zoom: 14,
    });
    this.Marker = new window.google.maps.Marker({
      map,
      position: { lat: 24.817629257410555, lng: 46.6416639907593 },
      title: 'HungerStation',
    });
  }

  render() {
    return <MapStyles id="map" />;
  }
}

export default MapHS;

const MapStyles = styled.div`
  width: 35%;
  height: 30%;
  position: absolute;
  ${mediaLess(600)`
    width: 80%;
    height: 30%;

  `};
`;
