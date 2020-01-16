import React from "react";

class CButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        }
    }

    render() {
        return <button>{this.state.text}</button>
    }
}

export default CButton;