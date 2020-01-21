import * as React from "react";
import apiSingleton from "../ApiSingleton";
import CForm from "./CForm";

export default class CContestProblemsTab extends CForm {
    constructor(props) {
        super(props);

        this.state = {
            contestInfo: props.contestInfo,
            problemList: props.problemList,
            selectedProblemId: props.problemList.length ? props.problemList[0].id : undefined
        };
    }

    getSelectedProblem() {
        return this.state.problemList.find(value => value.id === this.state.selectedProblemId)
    }

    render() {
        return <div>
            <h1 className="title">{this.state.contestInfo && this.state.contestInfo.name}
                <select className="form-control" name="selectedProblemId" onChange={this.handleInputChange}>
                    {
                        this.state.problemList.map(problem =>
                            <option value={problem.id}>{problem.name}</option>
                        )
                    }
                </select>
            </h1>
            <div>
                { this.state.selectedProblemId !== undefined &&
                    <div dangerouslySetInnerHTML={ {__html: this.getSelectedProblem().wording} }/>
                }
            </div>
        </div>
    }
}