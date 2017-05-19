import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    componentDidMount() {
      this.props.onRef(this)
    }
    componentWillUnmount() {
      this.props.onRef(null)
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Drawer
                        docked={false}
                        width={250}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <MenuItem onTouchTap={this.handleClose}>메뉴 1</MenuItem>
                        <MenuItem onTouchTap={this.handleClose}>메뉴 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}