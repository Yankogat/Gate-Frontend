import * as React from "react";

export default class CContestListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.data
    }

    render() {
        return <div>
            <p>{this.state.id}</p>
            <p>{this.state.name}</p>
            <p>{this.state.contestType}</p>
            <a href={`/contests/${this.state.id}`}>Подробнее</a>
        </div>
    }
}