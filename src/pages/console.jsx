import React from "react";
import LeftNav from "../components/core/left-nav";
import HeaderNav from "../components/core/header-nav";
import MainContent from "../components/core/main-content";


export default class ConsoleView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "title": "Console"
        }
    }

    render() {
        return (
            <div className="App">
                <LeftNav/>
                <MainContent>
                    <HeaderNav title={this.state.title}/>
                </MainContent>
            </div>
        );
    }


}
