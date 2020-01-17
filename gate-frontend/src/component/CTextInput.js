import React from "react";
import AInput from "./AInput";

export default class CTextInput extends AInput {
    constructor(props) {
        super(props);

        this.isPassword = props.isPassword;
    }

    render() {
        return <input type={this.isPassword ? "password" : "text"} onChange={this.handleChange}
                      value={this.state.value}/>
    }
}