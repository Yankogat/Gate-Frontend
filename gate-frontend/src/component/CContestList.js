import * as React from "react";
import apiSingleton from "../ApiSingleton";
import CContestListItem from "./CContestListItem";

class CContestList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contests: []
        };
    }


    componentDidMount() {
        this.getContests();
    }

    async getContests() {
        this.setState({
            contests: await apiSingleton.getAllContests()
        });
    }

    render() {
        return <div>
            {
                this.state.contests.map(contest =>
                    <CContestListItem key={contest.id} data={contest}/>
                )
            }
        </div>
    }
}

export default CContestList;