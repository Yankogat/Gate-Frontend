import * as React from "react";
import apiSingleton from "../ApiSingleton";
import CContentSubmitListItem from "./CContestSubmitListItem";
import {Accordion} from "react-bootstrap";

export default class CContestSubmitListTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contestInfo: props.contestInfo,
            problemList: props.problemList,
            submitList: []
        };
    }

    componentDidMount() {
        this.getSubmits();
    }

    async getSubmits() {
        this.setState({
            submitList: await apiSingleton.getSubmitsByContestId(this.state.contestInfo.id)
        });
    }

    getProblemNameById(id) {
        const problem = this.state.problemList.find(problem => problem.id === id);

        return problem ?  problem.name : "";
    }

    render() {
        return <Accordion>{
            this.state.submitList.map(submit =>
                <CContentSubmitListItem contestInfo={this.state.contestInfo} submitInfo={submit} problemName={this.getProblemNameById(submit.problemId)}/>
            )
        }</Accordion>
    }
}