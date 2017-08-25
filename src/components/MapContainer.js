import React, { Component } from 'react'
// Google-Maps-React
import { GoogleApiComponent } from 'google-maps-react';

const GAPI_KEY = process.env.GOOGLE_MAPS_API;

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: __GAPI_KEY__
})(Container)
