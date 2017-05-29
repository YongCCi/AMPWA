import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import DrawerComponent from '../NavBar/NavBar-default.js';


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="GitHub" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

const styles = { 
    title:{
        cursor:'pointer',
        textAlign:'center',
        marginLeft:'-24px'
    }
}

class EnhancedDrawer extends Component{
    render(){
        return <DrawerComponent {...this.props}/>
    }
}

class Header extends Component{
    state = {
        logged: true,
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    handleTouchTap = (event) => {
        event.preventDefault();
        alert('pwa Test app');
    };

    handleTochLeftIconTap = (event) => {
        event.preventDefault();
        this.child.handleToggle();
    }

    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title ="PWA"
                        titleStyle={styles.title}
                        onLeftIconButtonTouchTap ={this.handleTochLeftIconTap}
                        onTitleTouchTap={this.handleTouchTap}
                        iconElementRight={this.state.logged ? <Logged /> : <Login />}
                        />
                </MuiThemeProvider>
                <EnhancedDrawer onRef={ref=>(this.child=ref)}/> 
            
            </div>
        );
    }
}

export default Header;
