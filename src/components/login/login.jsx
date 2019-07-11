import React, { Component } from 'react'
import './login.css'

class Login extends Component {
    render() {
        return (
            <div>
                Login
                <div className="test"></div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props)
    }
}

export default Login;