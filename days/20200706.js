import React from "react";
import "./20200706.scss";

// props.numItems
let Blocks = (props) => {

    let blocks = [];

    for (let i of Array(props.numItems)) {
        blocks.push(<div className="block" key={i}></div>);
    }

    return <>{blocks}</>;
}

let Art20200706 = (props) => {

    document.body.setAttribute("id", "day4");

    return (
        <div className="art">
            <div className="block-layer">
                <Blocks numItems={80} />
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export default Art20200706;