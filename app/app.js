import injectTapEventPlugin from 'react-tap-event-plugin';
import React, {Component} from 'react';
import Header from './components/appBar/app-bar-shell-title-extendmenu.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();


class App extends Component{

    render(){
        return(
            <MuiThemeProvider>
            <div>
                <Header />
                {this.props.children}
            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;