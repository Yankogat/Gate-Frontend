import React from 'react';
import './App.css';
import CLoginForm from "./component/CLoginForm";
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-router";
import CContestList from "./component/CContestList";

function App() {
    return <BrowserRouter>
        <Switch>
            <Route path="/login" render={() => <CLoginForm/>}/>
            <Route path="/contests" render={() => <CContestList/>}/>
        </Switch>
    </BrowserRouter>
}

export default App;
