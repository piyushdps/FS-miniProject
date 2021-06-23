import React,{useContext,useState} from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import ApiHandlerContext from "context/ApiHandlerContext";
 const LoginForm = () =>{
 
  const [state, setState] = useState({ email: false  , id:'' , password:'' })

  const {login} = useContext(ApiHandlerContext)
  

  const handleValidSubmit = (event, values) => {
    setState({ email: values.email });
    login({id:state.id , password:state.password})
   
  };

  const handleInvalidSubmit = (event, errors, values) => {
    setState({ email: values.email, error: true });
    console.log(`Login failed`);
  };

 
    return (
      <AvForm
        onValidSubmit={handleValidSubmit}
        onInvalidSubmit={handleInvalidSubmit}
      >
        <AvField
          name="id"
          label="UserName/id"
          type="text"
          validate={{
            required: true,
            
          }}
          onChange = {e=>{setState({...state, id:e.target.value});}}
        />
        <AvField
          name="password"
          label="Password"
          type="password"
        onChange = {e=>{setState({...state, password:e.target.value});}}
          validate={{
            required: {
              value: true,
              errorMessage: "Please enter your password"
            },
            pattern: {
              value: "^[A-Za-z0-9]+$",
              errorMessage:
                "Your password must be composed only with letter and numbers"
            },
            minLength: {
              value: 2,
              errorMessage: "Your password must be between 2 and 16 characters"
            },
            maxLength: {
              value: 16,
              errorMessage: "Your password must be between 2 and 16 characters"
            }
          }}
        />
        <Button id="submit">Submit</Button>
      </AvForm>
    );
  }

  export default LoginForm