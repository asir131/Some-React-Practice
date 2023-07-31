
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {


  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }


  const [mode, setMode] = useState('light');
  const[text,setText]=useState('Enable Dark Mode');
  const[color,setColor]=useState('dark');
  const toggleMode=()=>{
    if(mode ==='light'){
       setMode('dark');
       setText('Enable Light Mode');
       setColor('light');
       document.body.style.backgroundColor='gray';
       showAlert('Dark mode has been enabled',"success");
       
    }
    else{
       setMode('light');
       setText('Enable Dark Mode');
       setColor('dark');
       document.body.style.backgroundColor='white';
       showAlert('Light mode has been enabled',"success");
       
    }
  }
  return (
    <>
    
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} text={text} color={color}/>
      <div className="container my-5">
        <Alert alert={alert}/>

        
      <TextForm showAlert={showAlert} heading="Enter the text to analys" mode={mode}/>
      <About></About>

      </div>

    </>
    

  );
}

export default App;
