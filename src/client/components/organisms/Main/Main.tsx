import * as React from 'react';
import styled from 'styled-components';
import Header from '@molecules/Header/Header';
import Map from '@atoms/Map/Map';

const Title = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.black }};
`;

interface IProps {
}

class Main extends React.Component<IProps, {}> {
  public render() {
    const navItems = ['map', 'people', 'work'];
    return (
      <div>
        <Title>
          Property Book
        </Title>
        <Header navItems={navItems} />
        <Map />
      </div>
    );
  }
}

export default Main;
