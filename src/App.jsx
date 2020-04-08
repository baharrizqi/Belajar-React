import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './views/screens/NewScreen'
import TableProduct from './views/components/TableProduct'

function App() {
  // let arr = ["Bandung","Jakarta","Tangerang"]
  // const renderArr = () => {
  //   return arr.map(val => {
  //     return (
  //     <>
  //     <p>{val}
  //     </p>
  //     <NewScreen/>
  //     </>
  //     )
  //   })
  // }
  return (
    <div className="App">

      <h1 className='text-class'>Hello Wolrd</h1>
      <h2 style={{border: '1px solid red',marginTop: '30px'}}>Test Styling</h2>
      {/* {renderArr()} */}
      <TableProduct/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
