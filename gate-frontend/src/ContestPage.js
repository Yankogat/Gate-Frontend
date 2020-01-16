import * as React from "react";
import {Tab, Tabs} from "react-bootstrap";
import CContestMonitorTab from "./component/CContestMonitorTab";
import apiSingleton from "./ApiSingleton";
import CContestProblemsTab from "./component/CContestProblemsTab";
import CContestSubmitsTab from "./component/CContestSubmitsTab";

class ContestPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.contestId,
            contestInfo: undefined
        };
    }

    componentDidMount() {
        this.getContestInfo();
    }

    async getContestInfo() {
        this.setState({
            contestInfo: await apiSingleton.getContestById(this.state.id)
        });
    }

    render() {
        return <Tabs defaultActiveKey="monitor" id="contestPageTabs">
            <Tab eventKey="monitor" title="Монитор">
                {this.state.contestInfo &&
                    <CContestMonitorTab contestInfo={this.state.contestInfo}/>
                }
            </Tab>
            <Tab eventKey="problems" title="Задачи">
                {this.state.contestInfo &&
                    <CContestProblemsTab contestInfo={this.state.contestInfo}/>
                }
            </Tab>
            <Tab eventKey="submits" title="Посылки">
                {this.state.contestInfo &&
                    <CContestSubmitsTab contestInfo={this.state.contestInfo}/>
                }
            </Tab>
            <Tab eventKey="submit" title="Послать решение">
                <p>Submit tab content</p>
            </Tab>
        </Tabs>
    }
}

export default ContestPage;