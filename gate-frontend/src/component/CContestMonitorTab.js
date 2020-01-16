import * as React from "react";
import apiSingleton from "../ApiSingleton";

class CContestMonitorTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contestInfo: props.contestInfo,
            monitorStandings: []
        };
    }

    componentDidMount() {
        this.getMonitorStandings();
    }

    async getMonitorStandings() {
        this.setState({
            monitorStandings: await apiSingleton.getMonitorStandingsByContestId(this.state.contestInfo.id)
        })
    }

    render() {
        return <div>{JSON.stringify(this.state.monitorStandings)}</div>
    }
}

export default CContestMonitorTab;