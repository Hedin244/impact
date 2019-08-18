import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import LoginModal from '../LoginModal';
import LogoutModal from '../LogoutModal';
import RegisterModal from '../RegisterModal';
import AuthContext from '../../context/auth-context';

export default class LoginButton extends PureComponent {

    static propTypes = {
        context: PropTypes.shape(AuthContext),
    };
    
    static contextType = AuthContext;
    context = this.props.context || {};

    state = {
        registerModalOpen: false,
        modalOpen: false,
    };

    handleRegister = () => {
        this.setState({
            registerModalOpen: false,
            modalOpen: true,
        });
    };

    toggleRegisterModal = () => {
        const { registerModalOpen } = this.state;
        this.setState({
            registerModalOpen: !registerModalOpen,
        });
    };

    toggleModal = () => {
        const { modalOpen } = this.state;
        this.setState({
            modalOpen: !modalOpen,
        });
    };

    render() {
        const { modalOpen, registerModalOpen } = this.state;
        const { token, login, logout } = this.context;
        
        if (token) {
            return [
                <Button key="button" onClick={ this.toggleModal } color="inherit">Logout</Button>,
                <LogoutModal
                    key="modal"
                    open={ modalOpen }
                    handleLogout={ logout }
                    handleClose={ this.toggleModal }
                />
            ]
        }

        return [
            <Button key="login-button" onClick={ this.toggleModal } color="inherit">Login</Button>,
            <Button key="register-button" onClick={ this.toggleRegisterModal } color="inherit">Register</Button>,
            <LoginModal
                key="login-modal"
                open={ modalOpen }
                handleLogin={ login }
                handleClose={ this.toggleModal }
            />,
            <RegisterModal
                key="register-modal"
                open={ registerModalOpen }
                handleRegister={ this.handleRegister }
                handleClose={ this.toggleRegisterModal }
            />,
        ]
    }
}