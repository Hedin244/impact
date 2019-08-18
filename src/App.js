import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Hedaer';
import AuthContext from './context/auth-context';
import './App.css';

class App extends PureComponent {

    state = {
        token : null,
        userId: null,
    };

    login = ({ token, userId, tokenExpiration }) => {
        this.setState({ 
            token: token, 
            userId: userId
        });
    };

    logout = () => {
        this.setState({
            token: null,
            userId: null
        });
    };
    
    render() {
        const { token, userId } = this.state;
        
        return (
            <div className="App">
                <AuthContext.Provider
                    value={{
                        token: this.state.token,
                        userId: this.state.userId,
                        login: this.login,
                        logout: this.logout
                    }}
                >
                    <Header />
                    <div className="center w85">
                        <div className="ph3 pv1 background-gray">
                            <BrowserRouter>
                            <Switch>
                                { token && <Route exact path="/">
                                    Home logged in: { userId }
                                </Route>
                                }
                                { token && <Route exact path="/">
                                    Home
                                </Route>
                                }
                            </Switch>
                            </BrowserRouter>
                        </div>
                    </div>
                </AuthContext.Provider>
            </div>
        );
    }
}

export default App;
