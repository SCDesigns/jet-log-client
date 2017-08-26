import React, { Component } from 'react'
// Google-Maps-React
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const GAPI_KEY = process.env.REACT_APP_GOOGLE_MAPS_API;

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    }
    return (
      <div style={style}>
        <Map
          key={GAPI_KEY}
          google={this.props.google}
          initialCenter={{
            lat: 22.277446,
            lng: 114.174900
          }}
          zoom={13}
          onClick={this.onMapClicked}
          clickableIcons={false}
        >
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (GAPI_KEY),
  version: '3'
})(MapContainer)
