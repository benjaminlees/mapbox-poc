import * as React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import styled from 'styled-components';
import mapStyle from './map-style-basic.json';

const MAPBOX_TOKEN = "pk.eyJ1IjoiYmVuamlsZWVzIiwiYSI6ImNqbGRudGZndDBjOGMzcG5qZXV0ZXpicTkifQ.mpDc7JtZyjUF_tMqxWRJWA";

const Mapbox = ReactMapboxGl({
  minZoom: 8,
  maxZoom: 15,
  accessToken: MAPBOX_TOKEN,
});

const containerStyles = {
  flex: 1,
};

// Define layout to use in Layer component

const flyToOptions = {
  speed: 0.8
};

export default class LondonCycle extends React.Component {
  state = {
    center: [-0.109970527, 51.52916347],
    zoom: [11],
  };

  onStyleLoad = (map) => {
    const { onStyleLoad } = this.props;
    return onStyleLoad && onStyleLoad(map);
  };

  render() {
    const { center, zoom } = this.state;

    return (
      <Mapbox
        onStyleLoad={this.onStyleLoad}
        center={center}
        zoom={zoom}
        onDrag={this.onDrag}
        containerStyle={containerStyles}
        flyToOptions={flyToOptions}
        style={mapStyle}
        maxBounds={[[-6.939282, 49.808189], [0.443531, 58.812584]]}
        containerStyle={{
          height: "100vh", width: "100vw"
        }}
      />
    );
  }
}