import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import intl from 'utils/intlService';
import { clearUndefs } from 'utils/helpers';
import { otherAddressType } from 'modules/address/constants';
import ModalFrame from 'containers/ModalFrameContainer';
import Button from 'components/Button';
import PhoneNumberInput from 'components/PhoneNumberInput';
import CheckboxIcon from 'components/CheckboxIcon';
import Icon from 'components/Icon';
import Notice from 'components/Notice';
import messages from './messages';
import SaveAddress from './SaveAddress';
import { getStreet, getBuildingNumber } from './helpers';
import {
  containerCss,
  subtitleCss,
  Container,
  Map,
  markerStyle,
  StyledInput,
  locateMeStyle,
  Content,
  InputsContainer,
  Desc,
  DescCount,
  DescError,
  ZoomCtrl,
  ZoomBorder,
  ZoomBtn,
} from './StyledComponents';

const descLimit = 250;
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
    const { latitude: lat, longitude: lng } = address.latitude
      ? address
      : location;

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

  componentDidUpdate({ location }) {
    const { latitude, longitude } = this.props.location;
    if (latitude !== location.latitude || longitude !== location.longitude) {
      isPlaceSelectAction = true;
      this.map.setCenter({ lat: latitude, lng: longitude });
      this.geocodeLatLng({ lat: latitude, lng: longitude });
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
          this.props.onValidate(location);

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

    const { location } = selectedPlace.geometry;
    this.props.onValidate({ lat: location.lat(), lng: location.lng() });
  };

  handleSubmit = () => {
    const { address, isLoading, isEligible } = this.props;
    const {
      selectedPlace,
      description,
      locationName,
      isSaveChecked,
      selectedType,
    } = this.state;

    if (
      !description ||
      isLoading ||
      (isEligible === false && !isSaveChecked) ||
      (isSaveChecked && !selectedType.key)
    ) {
      return;
    }

    const { geometry } = selectedPlace;

    const payload = {
      id: address.id,
      specific_type: selectedType.key || otherAddressType,
      latitude: geometry.location.lat(),
      longitude: geometry.location.lng(),
      description,
      mobile: this.phoneRef.current.value,
      street: getStreet(selectedPlace),
      building_number: getBuildingNumber(selectedPlace),
      line1: locationName,
    };

    this.props.onSubmit(clearUndefs(payload));
  };

  render() {
    const {
      address,
      phone,
      disabledTypes,
      hasNoAddress,
      isLoading,
      isEligible,
    } = this.props;
    const {
      locationName,
      description,
      isSaveChecked,
      selectedType,
    } = this.state;
    const mobile = address.mobile || (phone || '').substr(4);
    const isCreate = !address.id;

    return (
      <ModalFrame
        title={intl.formatMessage(
          messages[`${isCreate ? 'create' : 'update'}Title`],
        )}
        subtitle={hasNoAddress ? intl.formatMessage(messages.subtitle) : ''}
        isMobileFullscreen
        css={containerCss}
        subtitleCss={subtitleCss}
      >
        <Container>
          <Map id={mapId} />
          <Icon name="location-big" size={50} css={markerStyle} />
          <StyledInput
            type="text"
            id={autocompleteId}
            inputRef={this.locationRef}
            value={locationName}
            onChange={this.handleLocationInputChange}
          />
          <Icon
            name="gps"
            size={22}
            css={locateMeStyle}
            onClick={this.props.onLocateMeClick}
          />
          <ZoomCtrl>
            <ZoomBtn onClick={() => this.handleZoomChange(1)}>+</ZoomBtn>
            <ZoomBorder />
            <ZoomBtn onClick={() => this.handleZoomChange(-1)}>-</ZoomBtn>
          </ZoomCtrl>
          <Content>
            <InputsContainer>
              <Desc>
                <TextField
                  type="text"
                  value={description}
                  onChange={this.handleDescriptionInputChange}
                  InputProps={{
                    required: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <CheckboxIcon isChecked={!!description} />
                      </InputAdornment>
                    ),
                  }}
                  inputProps={{ maxLength: descLimit }} // eslint-disable-line react/jsx-no-duplicate-props
                  label={intl.formatMessage(messages.description)}
                  fullWidth
                  multiline
                  rowsMax="2"
                />
                <DescCount isError={description.length >= descLimit}>
                  {`${description.length}/${descLimit}`}
                </DescCount>
                {description.length >= descLimit && (
                  <DescError>
                    {intl.formatMessage(messages.descriptionMaxChars, {
                      limit: descLimit,
                    })}
                  </DescError>
                )}
              </Desc>
              <PhoneNumberInput
                phone={mobile}
                form={{
                  setFieldValue: () => {},
                  touched: {},
                  errors: {},
                }}
                field={{}}
                style={{ alignItems: 'center', flexGrow: 1 }}
                inputRef={this.phoneRef}
                InputProps={{
                  style: { marginBottom: 5 },
                }}
              />
            </InputsContainer>
            <SaveAddress
              ref={this.saveAddressRef}
              address={address}
              disabledTypes={disabledTypes}
              selectedType={selectedType}
              setType={selectedType => this.setState({ selectedType })}
              isSaveChecked={isSaveChecked}
              setSaveChecked={isSaveChecked => this.setState({ isSaveChecked })}
            />
            {isEligible === false ? (
              <Notice
                message={intl.formatMessage(
                  messages[`ineligible${isSaveChecked ? 'Saved' : ''}`],
                )}
                type="error"
                size="s"
              />
            ) : null}
          </Content>
          <Button
            primary
            size="xl"
            style={{ flexShrink: 0, height: 'auto' }}
            onClick={this.handleSubmit}
            disabled={
              isLoading ||
              !description ||
              (isEligible === false && !isSaveChecked) ||
              (isSaveChecked && !selectedType.key)
            }
          >
            {intl.formatMessage(messages.set)}
          </Button>
        </Container>
      </ModalFrame>
    );
  }
}

AddAddress.propTypes = {
  isEligible: PropTypes.bool,
  isLoading: PropTypes.bool,
  phone: PropTypes.string,
  address: PropTypes.object,
  disabledTypes: PropTypes.array,
  hasNoAddress: PropTypes.bool,
  location: PropTypes.object,
  onLocateMeClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValidate: PropTypes.func.isRequired,
};

AddAddress.defaultProps = {
  address: {},
};

export default AddAddress;
