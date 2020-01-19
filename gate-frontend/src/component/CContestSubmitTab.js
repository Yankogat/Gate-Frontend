import * as React from "react";
import apiSingleton from "../ApiSingleton";
import Form from "react-bootstrap/Form";
import CForm from "./CForm";

export default class CContestSubmitTab extends CForm {
    constructor(props) {
        super(props);

        this.state = {
            contestInfo: props.contestInfo,

            selectedProblem: undefined,
            problemList: [],

            selectedCompiler: undefined,
            compilerList: [],

            solutionSrc: ""
        };
    }

    componentDidMount() {
        this.getCompilerList();
        this.getProblemList();
    }

    async getCompilerList() {
        this.setState({
            compilerList: await apiSingleton.getCompilersByContestId(this.state.contestInfo.id)
        });
    }

    async getProblemList() {
        this.setState({
            problemList: await apiSingleton.getProblemsByContestId(this.state.contestInfo.id)
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        debugger

        await apiSingleton.submitSolution(this.state.contestInfo.id, this.state.solutionSrc, this.state.selectedProblem, this.state.selectedCompiler);
    };

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <select name="selectedCompiler" onChange={this.handleInputChange}>
                <option value={undefined}>-Выберите компилятор-</option>
                {
                    this.state.compilerList.map(compiler =>
                        <option value={compiler.value}>{compiler.name}</option>
                    )
                }
            </select>
            <select name="selectedProblem" onChange={this.handleInputChange}>
                <option value={undefined}>-Выберите задачу-</option>
                {
                    this.state.problemList.map(problem =>
                        <option value={problem.id}>{problem.name}</option>
                    )
                }
            </select>
            <textarea name="solutionSrc" value={this.state.solutionSrc} onChange={this.handleInputChange}/>
            <button>Послать решение</button>
        </Form>
    }
}