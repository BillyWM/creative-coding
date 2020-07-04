import React from "react";
import "./20200703.scss";

// props.repeats
let Repeat = (props) => {
    let els = [];
    for (let i of Array(props.repeats)) {
        els.push(props.children);
    }

    return <>{els}</>
}

// props.num
let BlockLayer = (props) => {
    return (
        <div className="block-layer">
            <Blocks num={props.num} />
        </div>
    )
}

// props.numItems
let BlockRow = (props) => {
    let blocks = [];
    let classes = `block-row of-${props.numItems}`;
    for (let i of Array(props.numItems)) {
        blocks.push(<div className="block"></div>);
    }

    return <div className={classes}>{blocks}</div>
}

// props.numItems
let Blocks = (props) => {

    let blocks = [];

    for (let i of Array(props.numItems)) {
        blocks.push(<div className="block"></div>);
    }

    return <>{blocks}</>;
}

let Art = (props) => {

    return (
        <div className="art">
            <Repeat repeats={2}>
                <BlockRow numItems={6} />
                <BlockRow numItems={5} />
            </Repeat>
        </div>
    )
}

export default Art;
