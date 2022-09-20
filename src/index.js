import React from "react";
 import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import  root  from "react-dom/client";

import App from './App';
import 'antd/dist/antd.css'
import store from "./app/store"
import { RotateLeftOutlined } from "@ant-design/icons";

// ReactDOM.render(
//     <React.StrictMode>
//       <Router>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </Router>
//     </React.StrictMode>,
//     document.getElementById('root'),
//   );

ReactDOM.render(
    // createRoot.render(

    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root')
);

// const container = document.getElementById('app');
// root.render(<App tab="home" />);

// root.render(
//     <Router>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </Router>,document.getElementById('app')
// )