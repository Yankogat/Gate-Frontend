import * as React from "react";
import apiSingleton from "../ApiSingleton";
import Form from "react-bootstrap/Form";
import CForm from "./CForm";
import {Button} from "react-bootstrap";

export default class CContestSubmitTab extends CForm {
    constructor(props) {
        super(props);

        this.state = {
            contestInfo: props.contestInfo,

            selectedProblem: undefined,
            problemList: props.problemList,

            selectedCompiler: undefined,
            compilerList: [],

            solutionSrc: ""
        };
    }

    componentDidMount() {
        this.getCompilerList();
    }

    async getCompilerList() {
        this.setState({
            compilerList: await apiSingleton.getCompilersByContestId(this.state.contestInfo.id)
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        debugger
        await apiSingleton.submitSolution(this.state.contestInfo.id, this.state.solutionSrc, this.state.selectedProblem, this.state.selectedCompiler);
    };

    render() {
        return <Form onSubmit={this.handleSubmit}>
            <Form.Control as="textarea" name="solutionSrc" value={this.state.solutionSrc} onChange={this.handleInputChange} rows="10"/>
            <div className="submit-form-row">
                <Form.Control size="lg" as="select" name="selectedProblem" onChange={this.handleInputChange}>
                    <option value={undefined}>-Выберите задачу-</option>
                    {
                        this.state.problemList.map(problem =>
                            <option value={problem.id}>{problem.name}</option>
                        )
                    }
                </Form.Control>
                <Form.Control size="lg" as="select" name="selectedCompiler" onChange={this.handleInputChange}>
                    <option value={undefined}>-Выберите компилятор-</option>
                    {
                        this.state.compilerList.map(compiler =>
                            <option value={compiler.value}>{compiler.name}</option>
                        )
                    }
                </Form.Control>
                <Button type="submit" className="submit-form-button" size="lg" variant="primary">Послать решение</Button>
            </div>
        </Form>
    }
}