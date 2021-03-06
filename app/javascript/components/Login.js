import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    render(){
        return(
                <div className="loginform">
                <form className="loginform" onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
                    <input 
                    type='text'
                    name='username'
                    value={this.state.username}
                    placeholder='Username'
                    onChange={this.handleChange} 
                    />

                    <input 
                    type='password'
                    name='password'
                    value={this.state.password}
                    placeholder='Password'
                    onChange={this.handleChange} 
                    />
                    <input type='submit' value='Log in!'/>
                </form>
                <Link to="/register">Don't have an account?</Link>
                </div>
        )
    }
}
export default Login;