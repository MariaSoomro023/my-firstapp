import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
//import AboutUs from "./components/AboutUs";
import Alert from "./components/Alert";
//import { Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert = (message,type) => {

    setAlert({

      msg : message,
      type : type
      
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {

    if(mode === 'light'){

      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been Enabled","success");
      document.title = 'WeBOC - dark mode theme'
     /*  setInterval(() => {
        document.title = 'WeBOC - Hello'
      }, 2000);
      setInterval(() => {
        document.title = 'WeBOC - Amazing app'
      }, 1000); */

    }
    else{

      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been Enabled","success"); 
      document.title = 'WeBOC'
    }


  }

  return (
    <>
    
      <Navbar title="WeBOC" aboutText="About US" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
     {/*   <Routes>
        <Route exact path="/" element={ <Textform heading="Enter Your Text" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
       </Routes> */}
       <Textform heading="Enter Your Text" mode={mode} showAlert={showAlert}/>
       </div> 
       
    </>
  );
}

export default App;
