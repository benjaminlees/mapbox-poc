import * as React from 'react';
import ReactMapboxGl, { Source } from 'react-mapbox-gl';
import mapStyle from './map-style-basic.json';

const MAPBOX_TOKEN = "pk.eyJ1IjoiYmVuamlsZWVzIiwiYSI6ImNqbGRudGZndDBjOGMzcG5qZXV0ZXpicTkifQ.mpDc7JtZyjUF_tMqxWRJWA";

const Mapbox = ReactMapboxGl({
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
    zoom: [12]
  };

  onStyleLoad = (map) => {
    const { onStyleLoad } = this.props;
    return onStyleLoad && onStyleLoad(map);
  };

  render() {
    const { center, zoom, pitch } = this.state;

    return (
      <Mapbox
        onStyleLoad={this.onStyleLoad}
        center={center}
        zoom={zoom}
        onDrag={this.onDrag}
        containerStyle={containerStyles}
        flyToOptions={flyToOptions}
        style={mapStyle}
        maxBounds={[[-0.567483, 51.287735], [0.237728, 51.661076]]}
        containerStyle={{
          height: "100vh", width: "100vw"
        }}
      >
      </Mapbox>
    );
  }
}