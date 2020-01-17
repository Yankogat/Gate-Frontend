import * as React from "react";

export default class AInput extends React.Component {
    constructor(props) {
        super(props);

        const updateParentValue = props.updateParentValue;

        this.state = {
            value: ""
        };

        typeof updateParentValue === "function" ? this.updateParentValue = updateParentValue : this.updateParentValue = (event) => {};
    }

    handleChange = event => {
        const newValue = event.target.value;

        this.setState({
            value: newValue
        });

        this.updateParentValue(newValue);
    }
}