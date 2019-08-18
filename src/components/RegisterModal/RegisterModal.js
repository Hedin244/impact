import React, { PureComponent } from 'react';
import upperFirst from 'lodash/upperFirst';
import PropTypes from 'prop-types';
import Loader from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class RegisterModal extends PureComponent {
    
    static propTypes = {
        open: PropTypes.bool,
        handleClose: PropTypes.func,
        handleRegister: PropTypes.func,
    };
    
    emailEl = React.createRef();
    passwordEl = React.createRef();

    state = {
        loading: false,
        emailError: null,
    };

    handleSubmit = event => {
        const { handleRegister } = this.props;

        event.preventDefault();
        const email = this.emailEl.current.value;
        const password = this.passwordEl.current.value;

        if (email.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        this.setState({ loading: true, });

        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `mutation { createUser(userInput: { 
                        email: "${ email }", 
                        password: "${ password }" 
                    }) { _id, email, errors } }`
            }),
        })
            .then(res => {
                return res.json();
            })
            .then(resData => {
                console.log(resData)
                if (resData.errors) {
                    throw resData.errors[0].message;
                } else if (resData.data.createUser.email) {
                    handleRegister();
                }
                this.setState({
                    emailError: null,
                    loading: false,
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    emailError: err,
                });
            });
    };
    
    renderInput = ({ field, ...other }) => {
        return (
            <div>
                <TextField
                    required
                    id={ field }
                    name={ field }
                    label={ upperFirst(field) }
                    helperText={ ' ' }
                    { ...other }
                />
            </div>
        )  
    };

    render() {
        const { open, handleClose } = this.props;
        const { loading, emailError } = this.state;
        const Input = this.renderInput;

        return (
            <Dialog open={ open } onClose={ handleClose }>
                { loading && <Loader /> }
                <form onSubmit={ this.handleSubmit }>
                    <DialogTitle>Register</DialogTitle>
                    <DialogContent>
                        <Input
                            autoFocus
                            field="email"
                            inputRef={ this.emailEl }
                            type="text"
                            error={ Boolean(emailError) }
                            helperText={ emailError ? emailError : ' ' }
                        />
                        <Input
                            field="password"
                            inputRef={ this.passwordEl }
                            type="password"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ handleClose } color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Register
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}