import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
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
                <div>
                    <Drawer
                        docked={false}
                        width={250}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/"/>}>홈</MenuItem>
                        <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="recruit"/>}>채용공고</MenuItem>
                        <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="push-setting"/>}>알림설정</MenuItem>
                    </Drawer>
                    {this.props.children}
                </div>
        );
    }
}