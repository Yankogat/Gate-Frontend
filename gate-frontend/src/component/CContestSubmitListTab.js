import * as React from "react";
import apiSingleton from "../ApiSingleton";

export default class CContestSubmitListTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contestInfo: props.contestInfo,
            submits: []
        };
    }

    componentDidMount() {
        this.getSubmits();
    }

    async getSubmits() {
        this.setState({
            submits: await apiSingleton.getSubmitsByContestId(this.state.contestInfo.id)
        });
    }

    render() {
        return <div>{JSON.stringify(this.state.submits)}</div>
    }
}