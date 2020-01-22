import React from "react";
import {AccordionCollapse, AccordionToggle, Form} from "react-bootstrap";

export default function CContentSubmitListItem(props) {
    const getTextCorrespondingToStatusCode = () => {
        return {
            ACCEPTED: "Зачтена",
            AWAITING_TESTING: "Ожидает тестирования"
        }[props.submitInfo.status];
    };

    const getClassCorrespondingToStatusCode = () => {
        return "text-" + {
            ACCEPTED: "success",
            AWAITING_TESTING: "warning"
        }[props.submitInfo.status];
    };

    return <div className="submit">
        <AccordionToggle eventKey={props.submitInfo.id} as="div" className="submit-header">
            <h2 className="submit-problem">
                {props.problemName}
            </h2>
            <h2 className={"submit-status " + getClassCorrespondingToStatusCode()}>
                {getTextCorrespondingToStatusCode()}
            </h2>
            <h2 className="submit-score">
                {props.submitInfo.summary ?
                    props.submitInfo.summary.score : "???"
                }
            </h2>
        </AccordionToggle>
        {props.submitInfo.summary &&
        <AccordionCollapse eventKey={props.submitInfo.id} className="submit-body">
            <>
                <h5 className="submit-solution-compiler">Компилятор: {props.submitInfo.solution.compiler}</h5>
                <Form.Control className="submit-solution-src" disabled="true" as="textarea" rows="5"
                              value={props.submitInfo.solution.sourceCode}/>
                //TODO
                <p>*Информация о прошедших тестах*</p>
                <p>Нужно уточнить вопросы реализации</p>
            </>
        </AccordionCollapse>
        }
    </div>
}