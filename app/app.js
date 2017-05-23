import injectTapEventPlugin from 'react-tap-event-plugin';
import React, {Component} from 'react';
import Header from './components/appBar/app-bar-shell-title-extendmenu.js';

injectTapEventPlugin();


class App extends Component{

    render(){
        return(
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default App;