import * as React from "react";
import apiSingleton from "../ApiSingleton";
import CContentSubmitListItem from "./CContestSubmitListItem";
import {Accordion} from "react-bootstrap";

export default function CContestSubmitListTab(props) {
    const getProblemNameById = id => {
        const problem = props.problemList.find(problem => problem.id === id);

        return problem ? problem.name : "";
    };

    return <Accordion>{
        props.submitList.map(submit =>
            <CContentSubmitListItem contestInfo={props.contestInfo} submitInfo={submit}
                                    problemName={getProblemNameById(submit.problemId)}/>
        )
    }</Accordion>

}