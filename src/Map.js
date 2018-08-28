import React, {Component} from 'react';
import MapGL from 'react-map-gl';
import mapStyle from './map-style-basic.json';

const MAPBOX_TOKEN = "pk.eyJ1IjoiYmVuamlsZWVzIiwiYSI6ImNqbGRudGZndDBjOGMzcG5qZXV0ZXpicTkifQ.mpDc7JtZyjUF_tMqxWRJWA";
export default class Map extends Component {

  state = {
    mapStyle,
    viewport: {
      latitude: 54.5074,
      longitude: -4,
      zoom: 5,
      maxZoom: 5,
      bearing: 0,
      pitch: 0,
      width: 500,
      height: 500,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _onViewportChange = viewport => {
    this.setState( {
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  _onStyleChange = mapStyle => this.setState({mapStyle});

  render() {

    const {viewport, mapStyle} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle={mapStyle}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN} >
      </MapGL>
    );
  }

}
