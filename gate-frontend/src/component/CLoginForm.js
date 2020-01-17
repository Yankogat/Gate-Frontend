import React from "react";
import authenticationSingleton from "../AuthenticationSingleton";
import CTextInput from "./CTextInput";
import CButton from "./CButton";
import Form from "react-bootstrap/Form";

class CLoginForm extends React.Component {
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
            <CTextInput updateParentValue={value => this.setState({username: value})}/>
            <CTextInput isPassword={true} value={this.state.password}
                        updateParentValue={value => this.setState({password: value})}/>
            <CButton text="Войти"/>
        </Form>
    }
}

export default CLoginForm;