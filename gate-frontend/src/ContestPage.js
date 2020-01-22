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
            problemList: undefined,
            submitList: undefined,
            monitorStandingList: undefined
        };
    }

    async componentDidMount() {
        await this.getContestInfo();
        this.getProblemList();
        this.getSubmitList();

        this.addUpdateInterval();
    }

    addUpdateInterval() {
        setInterval(this.update, 5000)
    }

    update = () => {
        this.getSubmitList();
        this.getMonitorStandingList();
    };

    async getContestInfo() {
        this.setState({
            contestInfo: await apiSingleton.getContestById(this.state.id)
        });
    }

    async getMonitorStandingList() {
        this.setState({
            monitorStandingList: await apiSingleton.getMonitorStandingsByContestId(this.state.id)
        });
    }

    async getProblemList() {
        this.setState({
            problemList: await apiSingleton.getProblemsByContestId(this.state.contestInfo.id)
        });
    }

    async getSubmitList() {
        this.setState({
            submitList: (await apiSingleton.getSubmitsByContestId(this.state.contestInfo.id)).reverse()
        });
    }

    render() {
        return <>
            {(this.state.problemList && this.state.submitList) &&
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
                            <CContestProblemsTab contestInfo={this.state.contestInfo}
                                                 problemList={this.state.problemList}
                                                 submitList={this.state.submitList}/>
                        </>
                        }
                    </Tab>
                    <Tab eventKey="submits" title="Посылки">
                        {this.state.contestInfo &&
                        <>
                            <h1 className="title">{this.state.contestInfo && this.state.contestInfo.name}</h1>
                            <CContestSubmitListTab contestInfo={this.state.contestInfo}
                                                   problemList={this.state.problemList}
                                                   submitList={this.state.submitList}/>
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