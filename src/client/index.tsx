import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/molecules/header/header';
import theme from './styles/theme';

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
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Client />, document.getElementById('root'));
