import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Frame from './Frame';
import { Provider } from 'react-redux';

const muiTheme = getMuiTheme({
  palette: {
    //accent1Color: deepOrange500,
  },
});

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <Frame/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
