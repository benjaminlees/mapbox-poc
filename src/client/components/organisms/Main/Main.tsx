import * as React from 'react';
import styled from 'styled-components';
import Header from '@molecules/Header/Header';
import Map from '@atoms/Map/Map';

const MainOuter = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

class Main extends React.Component<{}, {}> {
  public render() {
    const navItems = ['map', 'people', 'work'];
    return (
      <MainOuter>
        <Header navItems={navItems} />
        <Map />
      </MainOuter>
    );
  }
}

export default Main;
