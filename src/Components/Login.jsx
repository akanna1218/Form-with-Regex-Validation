import React from 'react'

const Login = ({Inputs,setInputs,HandleLogin,credentialError,successmsg,setSuccessmsg}) => {

  const HandleChange=(e)=>{
    setInputs({...Inputs,[e.target.name]:e.target.value})                               // instead of setting the value individually for email and password input we give as function and use the function while onChange
  }                                                                                     // why we use square bracket? for assigning value to the property . [property]:value
  return (
    <form className='Login'>
     {credentialError&& <div className='error'>{credentialError}</div>}
       <div>
        <input 
              type="text" 
              name='email' 
              required
              placeholder='Enter your mail Id'
              value={Inputs.email}                                                              // the useState with their specific key should be given in the value property.
              className='EmailInput'                                                            // but in setState , we should mention the value of the name property by giving them inside []
              onChange={HandleChange} />        
        </div> 
       <div>
        <input 
        type="password" 
        name='password'  
        required
        className='PasswordInput'
        placeholder='should contain min-8 character'
        value={Inputs.password}
        onChange={HandleChange} />
        
        </div>       

       <div>
        <button onClick={HandleLogin}>Login</button></div>
       {setSuccessmsg&& <p className='success'>{successmsg}</p>}
    </form>
  )
}

export default Login;