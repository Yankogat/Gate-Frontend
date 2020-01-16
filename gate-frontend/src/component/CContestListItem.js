import * as React from "react";

class CContestListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.data
    }

    redirectToContestPage() {
        //TODO
    }

    render() {
        return <div>
            <p>{this.state.id}</p>
            <p>{this.state.name}</p>
            <p>{this.state.contestType}</p>
            <button onClick={this.redirectToContestPage}>Подробнее</button>
        </div>
    }
}

export default CContestListItem;