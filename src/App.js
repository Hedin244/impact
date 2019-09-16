import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Hedaer';
import CharacterPage from './components/CharacterPage';
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
            <div className="App" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <AuthContext.Provider
                    value={{
                        token: this.state.token,
                        userId: this.state.userId,
                        login: this.login,
                        logout: this.logout
                    }}
                >
                    <Header />
                    <div style={{
                        flexGrow: '1',
                        overflow: 'auto',
                    }}>
                        <BrowserRouter>
                            <Switch>
                                { token &&
                                <Route exact path="/">
                                    Home logged in: { userId }
                                </Route>
                                }
                                <Route exact path="/roland">
                                    <CharacterPage />
                                </Route>
                                { !token &&
                                <Route exact path="/">
                                    Not logged in
                                </Route>
                                }
                            </Switch>
                        </BrowserRouter>
                    </div>
                </AuthContext.Provider>
            </div>
        );
    }
}

export default App;
