import React, {Component} from 'react';
import ToggleSwitch from '../components/toggleSwitch.js';
class PushSetting extends Component{
    
    handleToggle = (event) => {
        event.preventDefault();
        this.child.handleToggle();
    }

    render(){
        return(
            <div>
                <ToggleSwitch/>
            </div>
        );
    }
}

export default PushSetting;