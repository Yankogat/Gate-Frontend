import React from "react";
import {AccordionCollapse, AccordionToggle, Form} from "react-bootstrap";

export default class CContentSubmitListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitInfo: props.submitInfo,
            problemName: props.problemName
        }
    }

    getTextCorrespondingToStatusCode() {
        return {
            ACCEPTED: "Зачтена",
            AWAITING_TESTING: "Ожидает тестирования"
        }[this.state.submitInfo.status];
    }

    getClassCorrespondingToStatusCode() {
        return "text-" + {
            ACCEPTED: "success",
            AWAITING_TESTING: "warning"
        }[this.state.submitInfo.status];
    }

    render() {
        return <div className="submit">
            <AccordionToggle eventKey={this.state.submitInfo.id} as="div" className="submit-header">
                <h2 className="submit-problem">
                    { this.state.problemName }
                </h2>
                <h2 className={"submit-status " + this.getClassCorrespondingToStatusCode()}>
                    { this.getTextCorrespondingToStatusCode() }
                </h2>
                <h2 className="submit-score">
                    { this.state.submitInfo.summary ?
                        this.state.submitInfo.summary.score : "???"
                    }
                </h2>
            </AccordionToggle>
            {this.state.submitInfo.summary &&
                <AccordionCollapse eventKey={this.state.submitInfo.id} className="submit-body">
                    <>
                        <h5 className="submit-solution-compiler">Компилятор: {this.state.submitInfo.solution.compiler}</h5>
                        <Form.Control className="submit-solution-src" disabled="true" as="textarea" rows="5" value={this.state.submitInfo.solution.sourceCode}/>
                        //TODO
                        <p>*Информация о прошедших тестах*</p>
                        <p>Нужно уточнить вопросы реализации</p>
                    </>
                </AccordionCollapse>
            }
        </div>
    }
}