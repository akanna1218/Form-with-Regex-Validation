import { useState } from 'react';
import './App.css';
import Headers from './Components/Headers';
import Login from './Components/Login';
import { emailValidator, passWordValidator } from './Functions/RegexValidator';
function App() {
  const [Inputs, setInputs] = useState({ email: '', password: '' });        // for capturing more than one input bar value we use object inside useState and give a property that should matches with the <input tag's name= > 
  const [credentialError, setCredentialError] = useState('');
  const [successmsg,setSuccessmsg]=useState('')

  const HandleLogin = (e) => {
    if((Inputs.email.trim()) && (Inputs.password.trim())!==''){             // here we are checking the input bar is not equal to empty give the required property in put tag.
    e.preventDefault();
    setSuccessmsg('');
    setCredentialError('')

    // const emailTest = emailValidator(Inputs.email)                          // always declare the imported function to a variable and then call
    // const passwordTest = passWordValidator(Inputs.password)                  // one method of using the validator function

   if(!emailValidator(Inputs.email)){
    return setCredentialError('check email id')                              // the return statement is used because it will allow the program to run next if statement
   }
   if(!passWordValidator(Inputs.password)){   
    return setCredentialError('check password')
   }
    setInputs({ email: '', password: '' });                              // for setting the setSttate empty we have to mention each key
   setSuccessmsg('Logged in successfully')
  }}


  return (
    <div className="App">
      <Headers />
      <Login  
      credentialError={credentialError} 
      setInputs={setInputs} 
      Inputs={Inputs}
       HandleLogin={HandleLogin} 
       successmsg={successmsg}
       setSuccessmsg={setSuccessmsg}
       />
       
    </div>
  );
}

export default App;
