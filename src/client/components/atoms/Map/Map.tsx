import * as React from 'react';
import ReactMapboxGl, { Source } from 'react-mapbox-gl';
import mapStyle from '@config/map-style-basic';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmVuamlsZWVzIiwiYSI6ImNqbGRudGZndDBjOGMzcG5qZXV0ZXpicTkifQ.mpDc7JtZyjUF_tMqxWRJWA';

const Mapbox = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN,
});

const containerStyles = {
  flex: 1,
  height: '100vh',
  width: '100vw',
};

const flyToOptions = {
  speed: 0.8,
};

interface IProps {
}

interface IState {
  center: number[];
  defaultZoom: number;
}

export default class Map extends React.Component<IProps, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      center: [-0.109970527, 51.52916347],
      defaultZoom: 12,
    };
  }

  public render() {
    const { center, defaultZoom } = this.state;

    return (
      <Mapbox
        center={center}
        zoom={[defaultZoom]}
        containerStyle={containerStyles}
        flyToOptions={flyToOptions}
        style={mapStyle}
        maxBounds={[[-0.567483, 51.287735], [0.237728, 51.661076]]}
      />
    );
  }
}
