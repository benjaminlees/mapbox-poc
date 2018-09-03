import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import styledNormalize from 'styled-normalize'
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '@molecules/Header/Header';
import Map from '@atoms/Map/Map';
import theme from '@styles/theme';

injectGlobal`${styledNormalize}`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.black }};
`;

class Client extends React.Component {
  public render() {
    const navItems = ['map', 'people', 'work'];
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Title>
            Property Book
          </Title>
          <Header navItems={navItems} />
          <Map />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Client />, document.getElementById('root'));
