import injectTapEventPlugin from 'react-tap-event-plugin';
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './components/appBar/app-bar-shell-title-extendmenu.js';
injectTapEventPlugin();


const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
    color:'#FF6633'
  }
});

class App extends Component{

    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
            <div>
                <Header />
                {this.props.children}
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;