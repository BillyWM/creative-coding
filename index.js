import React from "react";
import ReactDOM from "react-dom";
import Art20200703 from "/days/20200703.js";
import Art20200704 from "/days/20200704.js";
import Art20200705 from "/days/20200705.js";

let Picker = (props) => {

    return (
        <div>
            <input list="days" type="date" onChange={props.dateChanged} defaultValue="2020-07-05"></input>
            <datalist id="days">
                <option label="001: July 3">2020-07-03</option>
                <option label="002: July 4">2020-07-04</option>
                <option label="003: July 5">2020-07-05</option>
            </datalist>
        </div>
    )
}

class Main extends React.Component {

    constructor(props) {
        super(props)
        // So fucking tired of messing with Babel config. Don't wanna right now for class properties syntax
        this.dateChanged = this.dateChanged.bind(this);

        this.selections = {
            "2020-07-03": <Art20200703 />,
            "2020-07-04": <Art20200704 />,
            "2020-07-05": <Art20200705 />
        }

        this.state = {
            picked: "2020-07-05"
        }
    }

    getArt(key) {
        if (key in this.selections) {
            return this.selections[key];
        }

        return null;
    }

    dateChanged(e) {
        let selected = e.target.value;

        this.setState({
            picked: selected
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Picker dateChanged={this.dateChanged} />
                {this.getArt(this.state.picked)}
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));