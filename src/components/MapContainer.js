import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
  />
)));

class MapContainer extends Component {
  render(){
    return(
      <div style={{
        position: 'absolute',
        top: 64,
        right: 0,
        bottom: 0,
        left: 0,
      }}>
        <GettingStartedGoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.28&key=AIzaSyDZI_bR9KifKkXs8XtgTbMHfz2FZ5HLcY8"
          loadingElement={<div></div>}
          containerElement={ <div style={{ height: `100%` }} /> }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default MapContainer
