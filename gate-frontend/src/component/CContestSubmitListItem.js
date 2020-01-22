import React from "react";
import {AccordionCollapse, AccordionToggle, Form} from "react-bootstrap";
import Util from "../Util";

export default function CContentSubmitListItem(props) {
    return <div className="submit">
        <AccordionToggle eventKey={props.submitInfo.id} as="div" className="submit-header">
            <h2 className={"submit-status " + Util.getClassCorrespondingToStatusCode(props.submitInfo.status)}>
                {Util.getTextCorrespondingToStatusCode(props.submitInfo.status)}
            </h2>
            <h2 className="submit-score">
                {props.submitInfo.summary &&
                    props.submitInfo.summary.score
                }
            </h2>
            <h5 className="submit-problem">
                {props.problemName}
            </h5>
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