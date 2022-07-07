import React from "react";
import * as ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(<App />, document.querySelector("#root")).render(<React.StrictMode></React.StrictMode>);



// ReactDOM.render(<App />, document.querySelector('#root'));

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);