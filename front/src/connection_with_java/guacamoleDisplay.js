import React from "react";
// import {encryptToken, tokenObject} from "./connection";
import Guacamole from 'guacamole-common-js';

class GuacamoleDisplay extends React.Component {
    connectionCount = 0;
    constructor(props) {
        super(props);
        this.myRef = React.createRef()

        this.client = new Guacamole.Client(new Guacamole.HTTPTunnel('http://localhost:8080/tunnel', true));
    }

    componentDidMount() {
        this.myRef.current.appendChild(this.client.getDisplay().getElement());
        this.connectionCount < 1 && this.client.connect();

        this.connectionCount++;
    }

    render() {
        return <div ref={this.myRef}/>;
    }
}

export default GuacamoleDisplay