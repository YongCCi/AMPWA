import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import AppBarComponent from './components/appBar/app-bar-shell-title-extendmenu.js';
import MainComponent from './components/main.js';

injectTapEventPlugin();


ReactDOM.render(
    <AppBarComponent />,
    document.getElementById('header')
);

ReactDOM.render(
  <MainComponent />,
  document.getElementById('main')
);