import React from "react";
import {encryptToken, tokenObject} from "./connection";
import Guacamole from 'guacamole-common-js';

class GuacamoleDisplay extends React.Component {
    connectionCount = 0;

    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.token = encryptToken(tokenObject);
        this.client = new Guacamole.Client(new Guacamole.WebSocketTunnel('ws://localhost:8080/'));
    }

    componentDidMount() {
        // disallowing multiple connections
        if (this.connectionCount > 0 ) return;

        this.myRef.current.appendChild(this.client.getDisplay().getElement());
        this.connectionCount++
        this.client.connect('token=' + this.token);
    }

    render() {
        return <div ref={this.myRef}/>;
    }
}

export default GuacamoleDisplay