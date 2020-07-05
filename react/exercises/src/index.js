import React from "react";
import ReactDOM from "react-dom";
//import Morning from "./components/Morning";

import Father from "./components/Father";
import Son from "./components/Son";
import Greeting from "./components/Greeting";

// ReactDOM.render(<div>
//     <Greeting type="Welcome, " name="User"/>
//   </div>,
//   document.getElementById('root'))

ReactDOM.render(
    <div>
        <Father name="Mark" lastName="Johnson">
            <Son name="James" />
            <Son name="Paul"/>
        </Father>
    </div>,
    document.getElementById('root'))