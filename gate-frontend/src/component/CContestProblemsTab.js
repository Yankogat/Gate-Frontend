import * as React from "react";
import apiSingleton from "../ApiSingleton";
import CForm from "./CForm";
import {AccordionToggle} from "react-bootstrap";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";
import Accordion from "react-bootstrap/Accordion";

export default class CContestProblemsTab extends CForm {
    constructor(props) {
        super(props);

        this.state = {
            contestInfo: props.contestInfo,
            problemList: props.problemList
        };
    }

    render() {
        return <Accordion className="problemlist-container">
            {
                this.state.problemList.map(problem =>
                    <div>
                        <AccordionToggle eventKey={problem.id} as="div">
                            <h2> {problem.name}</h2>
                        </AccordionToggle>
                        <AccordionCollapse eventKey={problem.id}>
                            <div dangerouslySetInnerHTML={{__html: problem.wording}}/>
                        </AccordionCollapse>
                    </div>
                )
            }
        </Accordion>
    }
}