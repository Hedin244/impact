import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import './App.css';

class App extends PureComponent {

    render() {
        return (
            <div className="App">
                <div className="center w85">
                    <div className="ph3 pv1 background-gray">
                        <BrowserRouter>
                        <Switch>
                            {/*<Route exact path="/" component={LinkList} />*/}
                            {/*<Route exact path="/create" component={CreateLink} />*/}
                            <Route exact path="/" component={ Login } />
                        </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
