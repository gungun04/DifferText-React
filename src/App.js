import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';



function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( () => {
      setAlert(null);
    } , 1500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }


  return (
    <>
    <Navbar title="DifferText" mode={mode}  toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
    </div>
    </>
  );
}

export default App;
