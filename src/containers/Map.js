/* eslint-disable no-undef */
import React from 'react';
// React-Google-Maps Imports
import { compose, withProps, lifecycle, withStateHandlers } from 'recompose';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';
// LogCard
import LogCard from '../views/Logs/LogCard'
// Custom Marker
import logMark from '../assets/marker.svg'

const API_URL = process.env.REACT_APP_API_URL;

const Map = compose(
  withStateHandlers(() => ({
     isOpen: false,
  }), {
  onToggleOpen: ({ isOpen }) => () => ({
     isOpen: !isOpen,
  })
  }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDZI_bR9KifKkXs8XtgTbMHfz2FZ5HLcY8",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ position: 'absolute', top: 64, right: 0, bottom: 0, left: 0, }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      this.setState({ markers: [] })
    },
    componentDidMount() {
      fetch(`${API_URL}/logs`)
        .then(res => res.json())
        .then(logs => {
          this.setState({ markers: logs });
        });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
  >
  {props.markers.map(marker => (
    <Marker
      icon={logMark}
      key={marker.id}
      position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onClick={props.onToggleOpen} >
        <LogCard key={marker.id} log={marker} />
      </InfoWindow>}
    </Marker>
  ))}
  </GoogleMap>
);

export default Map
