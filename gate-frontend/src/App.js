import React from 'react';
import './App.css';
import CLoginForm from "./component/CLoginForm";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";
import CContestList from "./component/CContestList";
import ContestPage from "./ContestPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import CSideBar from "./component/CSideBar";

function App() {
    return (
    <div className="d-flex">
        <CSideBar/>
        <div className="content">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={CLoginForm}/>
                    <Route path="/contests/:contestId" component={ContestPage}/>
                    <Route path="/contests" component={CContestList}/>
                </Switch>
            </BrowserRouter>
        </div>
    </div>)
}

export default App;
