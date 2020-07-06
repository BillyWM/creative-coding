import React from "react";
import "./20200705.scss";

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
        blocks.push(<div className="block" key={i}></div>);
    }

    return <>{blocks}</>;
}

let Art20200705 = (props) => {

    document.body.setAttribute("id", "day3");

    return (
        <div className="art">
            <div className="block-layer">
                <Blocks numItems={80} />
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default Art20200705;