import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

//var myelement=<h1> Hello World, welcome to react.....</h1>
// function Hello(){
//       return <h1>hello world</h1>
// }
const root=ReactDOM.createRoot(document.getElementById('root'));
//root.render(myelement);
root.render(<App/>);