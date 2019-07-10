import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props)
    }
}

export default Login;