import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import IconButton from '@material-ui/core/IconButton/index';
import MenuIcon from '@material-ui/icons/Menu';
import LoginButton from '../LoginButton/LoginButton';

export default class Header extends PureComponent {

    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography align="left" variant="h6" className={ classes.title }>
                        Impact
                    </Typography>
                    <LoginButton />
                </Toolbar>
            </AppBar>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};