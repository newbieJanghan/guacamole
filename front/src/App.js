import './App.css';
import React from "react";
import GuacamoleDisplay from "./connection_with_node/guacamoleDisplay.js";

function App() {
    return (<>
        <header>

        </header>
        <body>
        <div className="App">
            loading
        </div>
        ReactDOM.render(<GuacamoleDisplay/>, document.getElementById('root'));
        </body>
    </>);
}

export default App;
