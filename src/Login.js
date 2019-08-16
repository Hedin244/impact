import React, { Component } from 'react';
import { AUTH_TOKEN } from './constants';

class Login extends Component {

    state = {
        login: true,
        email: '',
        password: '',
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h4 className="mv3">Login</h4>
                <div className="flex flex-column">
                    <input
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                        type="text"
                        placeholder="Your email address"
                    />
                    <input
                        value={password}
                        onChange={e => this.setState({ password: e.target.value })}
                        type="password"
                        placeholder="Choose a safe password"
                    />
                </div>
                <div className="flex mt3">
                </div>
            </div>
        )
    }

    _confirm = async () => {
        // ... you'll implement this 🔜
    };

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    };
}

export default Login