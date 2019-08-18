import React, { PureComponent } from 'react';
import upperFirst from 'lodash/upperFirst';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class LoginModal extends PureComponent {
    
    static propTypes = {
        open: PropTypes.bool,
        handleClose: PropTypes.func,
        handleLogin: PropTypes.func,
    };
    
    emailEl = React.createRef();
    passwordEl = React.createRef();

    handleSubmit = event => {
        const { handleClose, handleLogin } = this.props;

        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;

        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }



        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `{ login(email: "${ email }", password: "${ password }") { token, userId, tokenExpiration } }`
            }),
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData => {
                if (resData.data.login.token) {
                    handleLogin({
                        token: resData.data.login.token,
                        userId: resData.data.login.userId,
                        tokenExpiration: resData.data.login.tokenExpiration,
                    });
                    handleClose();
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    renderInput = ({ field, ...other }) => {
        return (
            <div>
                <TextField
                    id={ field }
                    name={ field }
                    label={ upperFirst(field) }
                    { ...other }
                />
            </div>
        )  
    };

    render() {
        const { open, handleClose } = this.props;
        const Input = this.renderInput;

        return (
            <Dialog open={ open } onClose={ handleClose }>
                <form onSubmit={ this.handleSubmit }>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <Input field="email" inputRef={ this.emailEl } type="text" />
                        <Input field="password" inputRef={ this.passwordEl } type="password" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ handleClose } color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}