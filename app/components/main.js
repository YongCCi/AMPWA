import React, {Component} from 'react';
// import {RaisedButton} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MainComponent extends Component{
    render(){
        return(
            <MuiThemeProvider>
                <img src="/images/girl.jpg" alt="소녀" width="70%" height="70%" />
            </MuiThemeProvider>
        );
    }
}

export default MainComponent;