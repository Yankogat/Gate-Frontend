import React from "react";
import authenticationSingleton from "../AuthenticationSingleton";
import Form from "react-bootstrap/Form";

export default class CLoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        await authenticationSingleton.login(this.state.username, this.state.password);

        authenticationSingleton.isAuthenticated ? this.onSuccessfulLogin() : this.onFailedLogin()
    };

    onSuccessfulLogin() {
        //TODO
        // redirect
        console.log("Login successful!");
    }

    onFailedLogin() {
        //TODO
        // redirect
        console.log("Login failed");
    }

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username} onChange={event => this.setState({username: event.target.value})}/>
            <input type="password" value={this.state.password}
                   onChange={event => this.setState({password: event.target.value})}/>
            <button>Войти</button>
        </Form>
    }
}