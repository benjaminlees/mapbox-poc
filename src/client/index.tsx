import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import styledNormalize from 'styled-normalize';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Main from '@organisms/Main/Main';
import configureStore from '@client/helpers/store';
import theme from '@styles/theme';

const store = configureStore({});

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${styledNormalize};
  * {
    box-sizing: border-box;
  }
`;

class Client extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <Main />
        </ReduxProvider>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Client />, document.getElementById('root'));
