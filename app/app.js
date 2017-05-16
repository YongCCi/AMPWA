import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from 'material-ui/styles';
import MyAwesomeReactComponent from './components/main.js';

const Main = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);