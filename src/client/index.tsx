import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import styledNormalize from 'styled-normalize'
import { ThemeProvider, injectGlobal } from 'styled-components';
import Main from '@organisms/Main/Main';
import theme from '@styles/theme';

injectGlobal`${styledNormalize}`;

class Client extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Client />, document.getElementById('root'));
