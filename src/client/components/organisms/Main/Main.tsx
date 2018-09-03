import * as React from 'react';
import styled from 'styled-components';
import Header from '@molecules/Header/Header';
import Map from '@atoms/Map/Map';

interface IProps {
}

class Main extends React.Component<IProps, {}> {
  public render() {
    const navItems = ['map', 'people', 'work'];
    return (
      <div>
        <Header navItems={navItems} />
        <Map />
      </div>
    );
  }
}

export default Main;
