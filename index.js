import React from "react";
import ReactDOM from "react-dom";
import Art20200703 from "/days/20200703.js";
import Art20200704 from "/days/20200704.js";

let Picker = (props) => {

    return (
        <div>
            <input list="days" type="date" onChange={props.dateChanged}></input>
            <datalist id="days">
                <option label="001: July 3">2020-07-03</option>
                <option selected label="002: July 4">2020-07-04</option>
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
            "2020-07-04": <Art20200704 />
        }

        this.state = {
            picked: "2020-07-04"
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

        console.log(selected);

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