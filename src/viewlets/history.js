import React from "react";
import {getDataFromLocalStorage} from "../core/utils";
import {historyLocalStorageKey} from "../config";
import "./history.scss";
import GEList from "../ui-components/lists/list";

export default class HistoryComponent extends React.Component {

    static defaultProps = {
        makeQuery: (query) => console.log("makeQuery prop not set to HistoryFlyOut"),
        addQueryToConsole: (query) => console.log("addQueryToConsole prop not set to HistoryFlyOut"),
    }

    render() {
        const existingHistory = getDataFromLocalStorage(historyLocalStorageKey, true) || [];
        const historyToShow = existingHistory.filter(item => item.source !== "internal");
        return (
            <div>
                {historyToShow.length > 0
                    ?
                    <GEList type={"vertical"}>
                        {
                            historyToShow.filter(item => item.source !== "internal").map((existingHistoryItem, i) => {
                                return (
                                    <li className={"historyItem"} key={i}>
                                        <pre>{existingHistoryItem.query}</pre>
                                        <div>
                                            <button className={"small"}
                                               onClick={() => this.props.makeQuery(existingHistoryItem.query)}>
                                                Run Again
                                            </button>
                                            <button className={"small"}
                                               onClick={() => this.props.addQueryToConsole(existingHistoryItem.query)}>
                                                Edit Query in Console
                                            </button>
                                        </div>
                                        <div className={"small"}>
                                            Queried from {existingHistoryItem.source} at {existingHistoryItem.dt}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </GEList>
                    : <p>Hm! No user query history found!.</p>
                }
            </div>
        )
    }
}
