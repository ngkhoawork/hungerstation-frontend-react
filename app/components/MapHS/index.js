import React, { Component } from 'react';

import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { mediaLess } from 'utils/css/styles';

export class MapHS extends Component {
  state = {
    showingInfoWindow: false, // Hides or the shows the infoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <MapStyles>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 24.817629257410555,
            lng: 46.6416639907593,
          }}
        >
          <Marker onClick={this.onMarkerClick} name="Hunger Station" />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </MapStyles>
    );
  }
}

MapHS.propTypes = {
  google: PropTypes.object,
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyArMW6HFakfTQX62fNjG_55OLuXXNX8DNw',
})(MapHS);

const MapStyles = styled.div`
  width: 35%;
  height: 45%;
  position: absolute;
  ${mediaLess(600)`
    width: 80%;
    height: 30%;
    
  `};
`;
