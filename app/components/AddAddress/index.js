import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import intl from 'utils/intlService';
import ModalFrame from 'containers/ModalFrameContainer';
import Button from 'components/Button';
import PhoneNumberInput from 'components/PhoneNumberInput';
import CheckboxIcon from 'components/CheckboxIcon';
import Icon from 'components/Icon';
import messages from './messages';
import SaveAddress from './SaveAddress';
import {
  Container,
  Map,
  markerStyle,
  locationInputStyle,
  locateMeStyle,
  Content,
  Row,
  Desc,
  ZoomCtrl,
  ZoomBorder,
  ZoomBtn,
} from './StyledComponents';

const mapId = `addNewAddressMap${Math.random()}`;
const autocompleteId = `addNewAddressLocation${Math.random()}`;
let googleMaps = null;
let isPlaceSelectAction = false;

class AddAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = { locationName: '' };
    this.locationRef = React.createRef();
    this.descRef = React.createRef();
    this.saveAddressRef = React.createRef();
  }

  componentDidMount() {
    googleMaps = window.google.maps;

    const { lat, lng } = this.props.location;

    this.map = new googleMaps.Map(document.getElementById(mapId), {
      zoom: 16,
      center: new googleMaps.LatLng(lat, lng),
      disableDefaultUI: true,
    });

    this.mapListener = this.map.addListener(
      'center_changed',
      this.handleMapMove,
    );

    this.geocoder = new googleMaps.Geocoder();
    this.geocodeLatLng({ lat, lng });

    this.autocomplete = new googleMaps.places.Autocomplete(
      document.getElementById(autocompleteId),
      // geocode | address, sa | ba
      { types: ['address'], componentRestrictions: { country: 'sa' } },
    );

    this.autocomplete.setFields([
      'name',
      'formatted_address',
      'address_component',
      'geometry',
    ]);

    // when the user selects an address from the dropdown
    this.autocompleteListener = this.autocomplete.addListener(
      'place_changed',
      this.handlePlaceSelect,
    );
  }

  onComponentWillUnmount() {
    googleMaps.event.removeListener(this.mapListener);
    googleMaps.event.removeListener(this.autocompleteListener);
  }

  // setFieldValue = (type, value) => console.log(type, value);
  setFieldValue = () => {};

  geocodeLatLng = location => {
    this.geocoder.geocode({ location }, (results, status) => {
      if (status === 'OK' && results.length) {
        const selectedPlace = results.find(
          ({ types }) => types.indexOf('street_address') > -1,
        );

        if (selectedPlace) {
          this.setState({
            selectedPlace,
            locationName: selectedPlace.formatted_address,
          });
        }
      }
    });
  };

  handleZoomChange = change => {
    const newZoom = this.map.getZoom() + change;

    if (newZoom > 13) {
      this.map.setZoom(newZoom);

      // const { location } = this.props;
      // const { selectedPlace } = this.state;
      // const center =
      //   selectedPlace && selectedPlace.geometry
      //     ? selectedPlace.geometry.location
      //     : location;
      // this.map.setCenter(center);
    }
  };

  handleLocateMeClick = () => {
    if (this.props.isUserLocation) {
      this.map.setCenter(this.props.location);
    } else {
      this.props.onLocateMeClick();
    }
  };

  handleMapMove = debounce(() => {
    if (isPlaceSelectAction) {
      isPlaceSelectAction = false;
      return;
    }

    const latLng = this.map.getCenter();

    this.geocodeLatLng({ lat: latLng.lat(), lng: latLng.lng() });
  }, 200);

  handleLocationInputChange = ({ target }) =>
    this.setState({ locationName: target.value });

  handlePlaceSelect = () => {
    const selectedPlace = {
      ...this.autocomplete.getPlace(),
      fullAddress: this.locationRef.current.value,
    };

    if (!selectedPlace.geometry) return;

    isPlaceSelectAction = true;
    this.map.setCenter(selectedPlace.geometry.location);
    this.setState({ selectedPlace, locationName: selectedPlace.fullAddress });
  };

  handleSubmit = () => {
    const saveAddressState = this.saveAddressRef.getState();
    // TODO: pass all other data as well
    this.props.onSubmit({ saveAddressState });
  };

  render() {
    const { address = {} } = this.props;
    const { locationName } = this.state;
    const isDescValid = true;
    const { selectedPlace } = this.state; // eslint-disable-line

    return (
      <ModalFrame title={intl.formatMessage(messages.title)}>
        <Container>
          <Map id={mapId} />
          <Icon name="location-big" style={markerStyle} />
          <Input
            type="text"
            id={autocompleteId}
            inputRef={this.locationRef}
            style={locationInputStyle}
            value={locationName}
            onChange={this.handleLocationInputChange}
          />
          <Icon
            name="gps"
            size={22}
            style={locateMeStyle}
            onClick={this.handleLocateMeClick}
          />
          <ZoomCtrl>
            <ZoomBtn onClick={() => this.handleZoomChange(1)}>+</ZoomBtn>
            <ZoomBorder />
            <ZoomBtn onClick={() => this.handleZoomChange(-1)}>-</ZoomBtn>
          </ZoomCtrl>
          <Content>
            <Row>
              <Desc>
                <TextField
                  type="text"
                  defaultValue={address.description}
                  inputRef={this.descRef}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CheckboxIcon isChecked={isDescValid} />
                      </InputAdornment>
                    ),
                  }}
                  label={intl.formatMessage(messages.description)}
                  fullWidth
                />
              </Desc>
              <PhoneNumberInput
                form={{
                  setFieldValue: this.setFieldValue,
                  touched: {},
                  errors: {},
                }}
                field={{}}
                style={{ alignItems: 'center' }}
                InputProps={{ style: { marginBottom: 5 } }}
              />
            </Row>
            <SaveAddress innerRef={this.saveAddressRef} address={address} />
          </Content>
          <Button primary size="xl" onClick={this.handleSubmit}>
            {intl.formatMessage(messages.set)}
          </Button>
        </Container>
      </ModalFrame>
    );
  }
}

AddAddress.propTypes = {
  address: PropTypes.object,
  location: PropTypes.object,
  isUserLocation: PropTypes.bool,
  onLocateMeClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddAddress;
