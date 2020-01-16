import * as React from "react";
import apiSingleton from "../ApiSingleton";

class CContestProblemsTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contestInfo: props.contestInfo,
            problems: []
        };
    }

    componentDidMount() {
        this.getProblems();
    }

    async getProblems() {
        this.setState({
            problems: await apiSingleton.getProblemsByContestId(this.state.contestInfo.id)
        });
    }

    render() {
        return <div>{JSON.stringify(this.state.problems)}</div>
    }
}

export default CContestProblemsTab;