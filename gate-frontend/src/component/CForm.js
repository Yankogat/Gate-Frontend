import React from "react";

export default class CForm extends React.Component {
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };
}