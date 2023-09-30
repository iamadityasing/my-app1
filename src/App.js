import React from 'react';
import logo from './logo.svg'
function App(){

  var about='about react: it is a javascript library';
  var len_about=about.length;
  var hightlight={color:"cyan",backgroundColor:"yellow"};
  var a = false;
  var person = null;

  
  if (a){
    person='User'
  }
  else{
    person="Admin"
  }
  return(
    <>
      <h1>Hello, {person}</h1>
      <h3>ReactJS:</h3>
      <img src={logo} width="120"  height="120"/>
      <p style={hightlight}>{about}</p><br></br>
      <p>{about}</p><br></br>
      <h1>{'Length of about is='} {len_about}</h1>
    </>
  );


// return (
    // <div>
    //   <h1>Hello World</h1>
    // </div>
  //   <table>
  //     <tr>
  //       <th>Name</th>
  //     </tr>
  //     <tr>
  //       <th>Aditya</th>
  //     </tr>
  //     <tr>
  //       <th>Singh</th>
  //     </tr>
  //   </table>
  // );


}
export default App