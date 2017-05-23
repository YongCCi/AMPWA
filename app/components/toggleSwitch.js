import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

const ToggleSwitch = () => (
    <MuiThemeProvider>
    <div style={styles.block}>
        <Toggle
            label="Push On/Off"
            thumbStyle={styles.thumbOff}
            trackStyle={styles.trackOff}
            thumbSwitchedStyle={styles.thumbSwitched}
            trackSwitchedStyle={styles.trackSwitched}
            labelStyle={styles.labelStyle}
        />
    </div>
    </MuiThemeProvider>
);

export default ToggleSwitch;
