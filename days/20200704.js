import React from "react";
import "./20200704.scss";

// props.repeats
let Repeat = (props) => {
    let els = [];
    for (let i of Array(props.repeats)) {
        els.push(props.children);
    }

    return <>{els}</>
}

// props.numItems
let Blocks = (props) => {

    let blocks = [];

    for (let i of Array(props.numItems)) {
        blocks.push(<div className="block"></div>);
    }

    return <>{blocks}</>;
}

let Art20200704 = (props) => {

    return (
        <div className="art">
            <Blocks numItems={100} />
        </div>
    )
}

export default Art20200704;
