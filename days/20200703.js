import React from "react";
import "./20200703.scss";

// props.numItems
let Blocks = (props) => {

    let blocks = [];

    for (let i of Array(props.numItems)) {
        blocks.push(<div className="block" key={i}></div>);
    }

    return <>{blocks}</>;
}

let Art20200703 = (props) => {

    document.body.setAttribute("id", "day1");

    return (
        <div className="art">
            <Blocks numItems={30} />
        </div>
    )
}

export default Art20200703;
