import React, { Component } from 'react'
import routes from './router/index.js'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component{
    render() {
        let uid = 'test'; //本地获取用户信息
        return (
            <div className="app">
                <HashRouter>
                    <Switch>
                        <Route exact path="/" render={()=> (
                            <Redirect to={`/login/${uid}`} />
                        )} />
                        {
                            routes.map((item, index)=> (
                                <Route key={index} path={item.path} render={props=> (
                                    <item.component { ...props } />
                                )} />
                            ))
                        }
                        <Redirect to="/error" />
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default App;