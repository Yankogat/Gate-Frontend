import AInput from "./AInput";
import React from "react";

export default class CTextAreaInput extends AInput{
    constructor(props) {
        super(props);
    }

    render() {
        return <textarea onChange={this.handleChange} value={this.state.value}/>
    }
}