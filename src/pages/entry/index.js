import React, {useState} from 'react'
import { Jumbotron } from 'react-bootstrap'
import LoginForm from '../../components/Login'
import ResetPassword from '../../components/PasswordReset'
import './entry.css'

const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState('login')
  const handleOnChange = e=>{
    const {name,value}= e.target;
    switch(name){
      case "email":
        setEmail(value)
        break;
      
        case "password":
          setPassword(value)
          break;
        
          default:
            break;
    }
  }

  const handleOnSubmit= e=>{
    e.preventDefault()
    if(!email || !password){
     return alert("Fill up the form")
    }
    // TODO call api to submit the form
    console.log(email,password);
  }

  const handleOnResetSubmit= e=>{
    e.preventDefault()
    if(!email){
     return alert("Please enter the email")
    }
    // TODO call api to submit the form
    console.log(email);
  }
  
  const formSwitcher= (formType) =>{
    setFormLoad(formType)
  }

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === 'login' && <LoginForm handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
        />}
        {formLoad === 'reset' && <ResetPassword handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}
        />}
      </Jumbotron>
    </div>
  )
}

export default Entry
