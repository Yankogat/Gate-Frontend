import * as React from "react";
import {AccordionToggle} from "react-bootstrap";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";
import Accordion from "react-bootstrap/Accordion";

export default function CContestProblemsTab(props) {
    return <Accordion className="problemlist-container">
        {
            props.problemList.map(problem =>
                <div>
                    <AccordionToggle eventKey={problem.id} as="div" className="problem-header">
                        <h2 className="problem-header-name"> {problem.name}</h2>
                        <h2 className="problem-header-status">Не решена</h2>
                        <h5 className="problem-header-tries">Попыток: 111</h5>
                    </AccordionToggle>
                    <AccordionCollapse eventKey={problem.id} className="problem-body">
                        <div className="problem-wording" dangerouslySetInnerHTML={{__html: problem.wording}}/>
                    </AccordionCollapse>
                </div>
            )
        }
    </Accordion>
}