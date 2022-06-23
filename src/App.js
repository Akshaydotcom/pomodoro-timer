import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap'
import { ClockComponent } from './components/ClockComponent';
function App() {
  const [darkMode, setDarkMode]=useState(false)
  const [format24, setFormat24]=useState(false)
  const [key, setKey]=useState("Pomodoro")
  const changeMode=()=>{
    if(darkMode) setDarkMode(false)
    else setDarkMode(true)
  }
  const changehourFormat=()=>{
    if(format24) setFormat24(false)
    else setFormat24(true)
  }
  return (
    <div className={darkMode?"App body-light row":"body-dark App row"}>
      <div className='col-lg-4'></div>
      <div className='col-lg-4'>
      
        <div className='middle'>
        <Tabs activeKey={key} onSelect={(k)=>setKey(k)}>
          <Tab eventKey="Pomodoro" title="Pomodoro" >
            Lorem Ipsum Clock comes here
            <ClockComponent minutes={1} seconds={59} src={"Pomodoro"}/>
          </Tab>
          <Tab eventKey="ShortBreak" title="Short Break" >
          Lorem Ipsum Clock comes here in short break
          <ClockComponent minutes={1} seconds={59} src={"Short Break"}/>
          </Tab>
          <Tab eventKey="LongBreak" title="Long Break" >
          Lorem Ipsum Clock comes here in long break
          <ClockComponent minutes={1} seconds={59} src={"Long Break"}/>
          </Tab>
          <Tab eventKey="Timer Settings" title="Timer Settings">
            <div>
              Pomodoro Time format
            </div>
            <label>Focus Time</label><input type="number"></input><br/>
            <label>Short Break</label><input type="number"></input><br/>
            <label>Long Break</label><input type="number"></input><br/>
            <label>Dark Mode when running: </label><button onClick={changeMode}>change mode</button><br/>
            <label>Hour format: </label><ToggleButton onClick={changehourFormat}>change format</ToggleButton><br/>
          </Tab>
        </Tabs>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
