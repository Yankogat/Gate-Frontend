import * as React from "react";
import {Tab, Tabs} from "react-bootstrap";
import CContestMonitorTab from "./component/CContestMonitorTab";
import apiSingleton from "./ApiSingleton";
import CContestProblemsTab from "./component/CContestProblemsTab";
import CContestSubmitListTab from "./component/CContestSubmitListTab";
import CContestSubmitTab from "./component/CContestSubmitTab";

export default class ContestPage extends React.Component {
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
                    <CContestSubmitListTab contestInfo={this.state.contestInfo}/>
                }
            </Tab>
            <Tab eventKey="submit" title="Послать решение">
                {this.state.contestInfo &&
                    <CContestSubmitTab contestInfo={this.state.contestInfo}/>
                }
            </Tab>
        </Tabs>
    }
}