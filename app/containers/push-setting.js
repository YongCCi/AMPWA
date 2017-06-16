import React, {Component} from 'react';
import ToggleSwitch from '../components/toggleSwitch.js';
class PushSetting extends Component{
    initialisePushSubscribedUI = (sw) => {
        // Set the initial subscription value
        var isSubscribed = false;
        sw.pushManager.getSubscription()
        .then(function(subscription) {
            isSubscribed = !(subscription === null);
            if (isSubscribed) {
                //
            } else {
                //
            }
        });
    }

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