import React, {Component} from 'react';
import HelloFunctionComponent from "./HelloFunctionComponent";

class HelloWorldExample extends Component {
    render() {
        return (
            <div>
                <h1> Hello Narsimha</h1>
                <HelloFunctionComponent name={"Raj"}/>
            </div>
        );
    }
}

export default HelloWorldExample;