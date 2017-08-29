import React, { Component } from 'react'

import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import {amber300} from 'material-ui/styles/colors';
import {blueGrey800} from 'material-ui/styles/colors';

const GAPI_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;

export class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true
    })

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success', { lat, lng })
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false
        })
      })
      .catch((error) => {
        console.log('Oh no!', error)
        this.setState({
          geocodeResults: this.renderGeocodeFailure(error),
          loading: false
        })
      })
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null
    })
  }

  renderGeocodeFailure(err) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {err}
      </div>
    )
  }

  renderGeocodeSuccess(lat, lng) {
    return (
      <div className="alert alert-success block" role="alert">
        <strong> Lat: {lat}, Lng: {lng}</strong>
      </div>
    )
  }

  render() {
    const styles = {
      root: {
        position: 'relative',
        paddingBottom: '0px',
      },
      input: {
        display: 'inline-block',
        width: '90%',
        padding: '10px',
      },
      autocompleteContainer: {
        position: 'absolute',
        display: 'block',
        top: '100%',
        backgroundColor: 'white',
        border: 'none',
        width: '100%',
        'overflow-y': 'scroll',
        height: '100px',
      },
      autocompleteItem: {
        backgroundColor: '#ffffff',
        padding: '10px',
        color: '#555555',
        cursor: 'pointer',
      },
      autocompleteItemActive: {
        backgroundColor: blueGrey800,
        color: amber300,
      },
      googleLogoContainer: {
        textAlign: 'right',
        padding: '1px',
        backgroundColor: '#fafafa'
      },
      googleLogoImage: {
        width: 150
      }
    }

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
      </div>)

    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: "Find Latitude, Longitude",
    }

    return (
        <div className='container center'>
          <PlacesAutocomplete
            onSelect={this.handleSelect}
            autocompleteItem={AutocompleteItem}
            onEnterKeyDown={this.handleSelect}
            inputProps={inputProps}
            styles={styles}
          />
          {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw" /></div> : null}
          {!this.state.loading && this.state.geocodeResults ?
            <div className='geocoding-results'>{this.state.geocodeResults}</div> :
          null}
        </div>
    )
  }
}

export default Location
