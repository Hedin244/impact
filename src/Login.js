import React, { Component } from 'react';
import { AUTH_TOKEN } from './constants';
import {TextField, Button} from '@material-ui/core';

class Login extends Component {

    state = {
        login: true,
        email: '',
        password: '',
    };

    login = () => {
        const { email, password } = this.state;

        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `{ login(email: "${ email }", password: "${ password }") { token } }`
            }),
        })
            .then(res => res.json())
            .then(res => {
                const { data, errors } = res;
                if (errors) {
                    console.log(errors[0]);
                } else {
                    console.log(data);
                }
            });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h4 className="mv3">Login</h4>
                <div className="flex flex-column">
                    <TextField
                        value={ email }
                        onChange={ e => this.setState({ email: e.target.value }) }
                        type="text"
                        label="Email"
                    />
                    <TextField
                        value={ password }
                        onChange={ e => this.setState({ password: e.target.value }) }
                        type="password"
                        label="Password"
                    />
                    <Button onClick={ this.login }>login</Button>
                </div>
            </div>
        )
    }
}

export default Login