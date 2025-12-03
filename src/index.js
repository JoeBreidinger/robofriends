import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import reportWebVitals from "./reportWebVitals";
/**=^=Global=^= */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex flex-wrap items-center justify-center vh-100 pa4">
      <div className="tc">
        <App />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();

/*
Old Version:
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
registerServiceWorker();
*/

/*
New Version:

*/
