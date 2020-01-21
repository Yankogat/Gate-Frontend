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
            contestInfo: undefined,
            problemList: undefined
        };
    }

    async componentDidMount() {
        await this.getContestInfo();
        this.getProblemList();
    }

    async getContestInfo() {
        this.setState({
            contestInfo: await apiSingleton.getContestById(this.state.id)
        });
    }

    async getProblemList() {
        this.setState({
            problemList: await apiSingleton.getProblemsByContestId(this.state.contestInfo.id)
        });
    }

    render() {
        return <>
            {this.state.problemList &&
                <div className="top-navigation">
                    <Tabs defaultActiveKey="monitor" transition={false} id="contestPageTabs">
                        <Tab eventKey="monitor" title="Монитор">
                            {this.state.contestInfo &&
                            <>
                                <h1 className="title">{this.state.contestInfo && this.state.contestInfo.name}</h1>
                                <CContestMonitorTab contestInfo={this.state.contestInfo}/>
                            </>
                            }
                        </Tab>
                        <Tab eventKey="problems" title="Задачи">
                            {this.state.contestInfo &&
                            <>
                                <h1 className="title">{this.state.contestInfo && this.state.contestInfo.name}</h1>
                                <CContestProblemsTab contestInfo={this.state.contestInfo} problemList={this.state.problemList}/>
                            </>
                            }
                        </Tab>
                        <Tab eventKey="submits" title="Посылки">
                            {this.state.contestInfo &&
                            <>
                                <h1 className="title">{this.state.contestInfo && this.state.contestInfo.name}</h1>
                                <CContestSubmitListTab contestInfo={this.state.contestInfo}
                                                       problemList={this.state.problemList}/>
                            </>
                            }
                        </Tab>
                        <Tab eventKey="submit" title="Послать решение">
                            {this.state.contestInfo &&
                            <>
                                <h1 className="title">{this.state.contestInfo && this.state.contestInfo.name}</h1>
                                <CContestSubmitTab contestInfo={this.state.contestInfo}
                                                   problemList={this.state.problemList}/>
                            </>
                            }
                        </Tab>
                    </Tabs>
                </div>
            }
        </>
    }
}