import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';


function App() {
  const [darkMode, setDarkMode]=useState(true)
  const [key, setKey]=useState("Pomodoro")
  const changeMode=()=>{
    if(darkMode) setDarkMode(false)
    else setDarkMode(true)
  }
  return (
    <div className={darkMode?"App row":"body-dark App row"}>
      {/* <button onClick={changeMode}/> */}
      <div className='col-lg-3'></div>
      <div className='middle col-lg-3'>
        <Tabs activeKey={key} onSelect={(k)=>setKey(k)}>
          <Tab eventKey="Pomodoro" title="Pomodoro" >
            Lorem Ipsum Clock comes here
          </Tab>
          <Tab eventKey="ShortBreak" title="Short Break" >
          Lorem Ipsum Clock comes here in short break
          </Tab>
          <Tab eventKey="LongBreak" title="Long Break" >
          Lorem Ipsum Clock comes here in long break
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
