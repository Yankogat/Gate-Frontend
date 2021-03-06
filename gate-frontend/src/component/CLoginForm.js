import React from "react";
import authenticationSingleton from "../AuthenticationSingleton";
import Form from "react-bootstrap/Form";
import CForm from "./CForm";

export default class CLoginForm extends CForm {
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
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
            <button>Войти</button>
        </Form>
    }
}