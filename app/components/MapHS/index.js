import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    return <MapStyles id="map" css={this.props.css} />;
  }
}

MapHS.propTypes = {
  css: PropTypes.array,
};

export default MapHS;

const MapStyles = styled.div`
  width: 100%;
  height: 40vh;

  ${({ css }) => css};
`;
