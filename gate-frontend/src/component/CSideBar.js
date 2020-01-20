import React from "react";

export default class CSideBar extends React.Component {
    render() {
        return <div className="sidebar">
            <img className="img-fluid" src="/logo.png"/>
            <div className="list-group">
                <a className="list-group-item" href="/">Главная</a>
                <a className="list-group-item" href="/contests">Олимпиады</a>
            </div>
        </div>
    }
}