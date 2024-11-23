import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';
import{
  Routes,
  Route, 
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const [theme, settheme] = useState('light')

  const toggleOcean = () => {
    if (theme === 'light'||theme === 'green') {
      settheme('blue')
      document.body.style.backgroundColor = "blue"
      document.body.style.color = "white"
      showAlert('The theme has been set to Ocean', 'success')
    }
  }

  const toggleEmerald = () => {
    if (theme === 'light'|| theme==='blue') {
      settheme('green')
      document.body.style.backgroundColor = "green"
      document.body.style.color = "white"
      showAlert('The theme has been set to Emerald', 'success')
    }
  }
  const toggleLight=()=>{
    if (theme === 'blue'|| theme==='green'|| mode==='dark') {
      settheme('light')
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      let a = document.getElementsByTagName('style')[0];
      a.innerHTML = ".mainArea::placeholder{color:#272a2d;}"
      showAlert('Light mode has been enabled', 'success')
    }
  }

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      settheme('light');

      document.body.style.backgroundColor = "#272a2d";
      document.body.style.color = "white";
      let a = document.getElementsByTagName('style')[0];
      a.innerHTML = ".mainArea::placeholder{color:white;}"
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light');
      settheme('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      let a = document.getElementsByTagName('style')[0];
      a.innerHTML = ".mainArea::placeholder{color:#272a2d;}"
      showAlert('Light mode has been enabled', 'success')
    }
  }
  return (
    <>
      <Navbar theme={theme} toggleLight={toggleLight} toggleOcean={toggleOcean} toggleEmerald={toggleEmerald} title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
        <Route path="/" element={<TextForm theme={theme} showAlert={showAlert} mode={mode} />} />
        <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
    </>
  );
}

export default App;
