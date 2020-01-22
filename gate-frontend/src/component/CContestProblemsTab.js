import * as React from "react";
import {AccordionToggle} from "react-bootstrap";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";
import Accordion from "react-bootstrap/Accordion";
import authenticationSingleton from "../AuthenticationSingleton";
import Util from "../Util";

export default function CContestProblemsTab(props) {
    const getRelevantStatusByProblemId = problemId => {
        const filteredSubmits = props.submitList.filter(submit =>
            submit.problemId === problemId && submit.userId === authenticationSingleton.id
        );

        if (!filteredSubmits.length)
            return "UNATTEMPTED";

        return filteredSubmits.find(submit => submit.status === "ACCEPTED") ? "ACCEPTED" : filteredSubmits[0];
    };

    return <Accordion className="problemlist-container">
        {
            props.problemList.map(problem =>
                <div>
                    <AccordionToggle eventKey={problem.id} as="div" className="problem-header">
                        <h2 className="problem-header-name"> {problem.name}</h2>
                        <h2 className={"problem-header-status " + Util.getClassCorrespondingToStatusCode(getRelevantStatusByProblemId(problem.id))}>{Util.getTextCorrespondingToStatusCode(getRelevantStatusByProblemId(problem.id))}</h2>
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