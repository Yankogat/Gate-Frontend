import React from "react";

class CTextField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            isPassword: this.props.isPassword,
            updateParentalValue: this.props.onChange
        };
    }

    onChange = event => {
        let newValue = event.target.value;

        this.setState({
            value: newValue
        });

        if (typeof this.state.updateParentalValue === "function")
            this.state.updateParentalValue(newValue);
    };

    render() {
        return <input type={this.state.isPassword ? "password" : "text"} onChange={this.onChange}
                      value={this.state.value}/>
    }
}

export default CTextField;