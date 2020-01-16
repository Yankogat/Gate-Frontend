import React from "react";
import authenticationSingleton from "../AuthenticationSingleton";
import CTextField from "./CTextField";
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
    };

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <CTextField onChange={value => this.setState({username: value})}/>
            <CTextField isPassword={true} value={this.state.password}
                        onChange={value => this.setState({password: value})}/>
            <CButton text="Войти"/>
        </Form>
    }
}

export default CLoginForm;