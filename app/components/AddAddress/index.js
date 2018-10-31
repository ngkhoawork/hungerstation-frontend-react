import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import intl from 'utils/intlService';
import { clearUndefs } from 'utils/helpers';
import ModalFrame from 'containers/ModalFrameContainer';
import Button from 'components/Button';
import PhoneNumberInput from 'components/PhoneNumberInput';
import CheckboxIcon from 'components/CheckboxIcon';
import Icon from 'components/Icon';
// import countryCodes from 'utils/countryCodes';
import messages from './messages';
import SaveAddress from './SaveAddress';
import { getStreet, getBuildingNumber } from './helpers';
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

    const { address } = props;
    const { description = '', street, building_number } = address;
    const locationName = address.street ? `${building_number} ${street}` : '';
    this.state = { locationName, description };
    this.locationRef = React.createRef();
    this.phoneRef = React.createRef();
    this.saveAddressRef = React.createRef();
  }

  componentDidMount() {
    googleMaps = window.google.maps;

    const { location, address } = this.props;
    const { lat, lng } = address.lat ? address : location;

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

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setLocation(this.props.location);
    }
  }

  onComponentWillUnmount() {
    googleMaps.event.removeListener(this.mapListener);
    googleMaps.event.removeListener(this.autocompleteListener);
  }

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

  setLocation = latLng => {
    this.map.setCenter(latLng);
    this.geocodeLatLng(latLng);
  };

  handleZoomChange = change => {
    const newZoom = this.map.getZoom() + change;

    if (newZoom > 13) this.map.setZoom(newZoom);
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

  handleDescriptionInputChange = ({ target }) =>
    this.setState({ description: target.value });

  handlePlaceSelect = () => {
    const selectedPlace = this.autocomplete.getPlace();

    if (!selectedPlace.geometry) return;

    isPlaceSelectAction = true;
    this.map.setCenter(selectedPlace.geometry.location);
    this.setState({
      selectedPlace,
      locationName: this.locationRef.current.value,
    });
  };

  handleSubmit = () => {
    const { address } = this.props;
    const { selectedPlace, description, locationName } = this.state;
    const saveAddressState = this.saveAddressRef.current.getState();

    if (!saveAddressState || !description) return;

    const { specific_type, name } = saveAddressState;
    const { geometry } = selectedPlace;

    const payload = {
      id: address.id,
      name,
      specific_type,
      lat: geometry.location.lat(),
      lng: geometry.location.lng(),
      description,
      // mobile: `${countryCodes[0][1].label}${this.phoneRef.current.value}`,
      mobile: this.phoneRef.current.value,
      street: getStreet(selectedPlace),
      building_number: getBuildingNumber(selectedPlace),
      line1: locationName,
    };

    this.props.onSubmit(clearUndefs(payload));
  };

  render() {
    const { address, phone, disabledTypes, onLocateMeClick } = this.props;
    const { locationName, description } = this.state;
    const mobile = address.mobile || (phone || '').substr(4);
    const isCreate = !address.id;

    return (
      <ModalFrame
        title={intl.formatMessage(
          messages[`${isCreate ? 'create' : 'update'}Title`],
        )}
        subtitle={isCreate ? intl.formatMessage(messages.subtitle) : ''}
      >
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
            onClick={onLocateMeClick}
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
                  required
                  value={description}
                  onChange={this.handleDescriptionInputChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CheckboxIcon isChecked={!!description} />
                      </InputAdornment>
                    ),
                  }}
                  label={intl.formatMessage(messages.description)}
                  fullWidth
                />
              </Desc>
              <PhoneNumberInput
                phone={mobile}
                form={{
                  setFieldValue: () => {},
                  touched: {},
                  errors: {},
                }}
                field={{}}
                style={{ alignItems: 'center' }}
                inputRef={this.phoneRef}
                InputProps={{
                  style: { marginBottom: 5 },
                }}
              />
            </Row>
            <SaveAddress
              ref={this.saveAddressRef}
              address={address}
              disabledTypes={disabledTypes}
            />
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
  phone: PropTypes.string,
  address: PropTypes.object,
  disabledTypes: PropTypes.array,
  location: PropTypes.object,
  onLocateMeClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

AddAddress.defaultProps = {
  address: {},
};

export default AddAddress;
