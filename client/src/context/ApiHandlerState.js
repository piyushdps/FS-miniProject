import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiHandlerContext from './ApiHandlerContext'
import Cookies from 'js-cookie';
import NotificationAlert from "react-notification-alert";
import { useHistory } from "react-router-dom";

const ApiHandlerState = (props) => {

  const history = useHistory();

    const notificationAlert = React.useRef();
  
    const[dashboardData ,setDashboardData] = useState({prison:0 , prisoner:0, user:0 ,name:''})
    const totalPrisons = dashboardData.prison;
    const totalPrisoners = dashboardData.prisoner;
    const totalUsers=dashboardData.user;
    const userKaNaam = dashboardData.name;
    const [refresh, setRefresh] = React.useState(false);


    const [loggedIn, setLoggedIn] = React.useState(false);


    useEffect(()=>{
    
      checkLogin()
    },[refresh])
  



    const addPrisoners = async (e,data) =>{
      e.preventDefault();
          
      try {
        const res = await axios.post('/api/prisoners', data);  
       
        const options = {
          place: "tr",
          message: (
            <div>
              <div>
                Prisoner Registered
              </div>
            </div>
          ),
          type: "success",
          icon: "nc-icon nc-bell-55",
          autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
      } catch (error) {
        console.log(error.response.data.message)
        
        const options = {
          place: "tr",
          message: (
            <div>
              <div>
             {error.response.data?.message }
              </div>
            </div>
          ),
          type: "danger",
          icon: "nc-icon nc-simple-remove",
          autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
      }
      
        }
        

const checkLogin = async () =>{
    try {
        
        const res =await axios.get('/api/checkLogin');
        setDashboardData(res.data.data)
        // console.log(res.data.data)

        setLoggedIn(res.data.status)
    } catch (error) {
        setLoggedIn(false)
        
    }

}


const getAllUsers = async () =>{
  try {
    const res = await axios.get('/api/users')

    return res.data

  } catch (error) {
    
    const options = {
      place: "tr",
      message: (
        <div>
          <div>
            Error in fetching User's Data
          </div>
        </div>
      ),
      type: "success",
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);


  }
}

const logout = async () =>{
    try {
        
        const res =await axios.get('/api/logout');
            
        setLoggedIn(false)
    } catch (error) {
        
        setLoggedIn(false)
        
    }

}



    const getAllPrisoners = async () =>{
      try {
        const res = await axios.get('/api/prisoners')
    
        return res.data
    
      } catch (error) {
        
        const options = {
          place: "tr",
          message: (
            <div>
              <div>
                Error in fetching User's Data
              </div>
            </div>
          ),
          type: "success",
          icon: "nc-icon nc-bell-55",
          autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
    
    
      }
    }

    const getAllPrisons = async () =>{
      try {
        const res = await axios.get('/api/prisons')
    
        return res.data
    
      } catch (error) {
        
        const options = {
          place: "tr",
          message: (
            <div>
              <div>
                Error in fetching User's Data
              </div>
            </div>
          ),
          type: "success",
          icon: "nc-icon nc-bell-55",
          autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
    
    
      }
    }






const login = async(data) =>{
    try {
        const res = await axios.post('/api/login' , data);
        setRefresh(!refresh) 
        
        const options = {
            place: "tr",
            message: (
              <div>
                <div>
                  Login Successful
                </div>
              </div>
            ),
            type: "success",
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7,
          };

          history.push('/admin/dashboard');
          notificationAlert.current.notificationAlert(options);
    } catch (error) {
        const options = {
            place: "tr",
            message: (
              <div>
                <div>
                  Login Failed
                </div>
              </div>
            ),
            type: "Danger",
            icon: "nc-icon nc-bell-55",
            autoDismiss: 7,
          };
          notificationAlert.current.notificationAlert(options);
    }
    
}




const register = async(data) =>{
    try {
  
        const res = await axios.post('/api/register' , data);
        setRefresh(!refresh)  
        const options = {
          place: "tr",
          message: (
            <div>
              <div>
                User Registered
              </div>
            </div>
          ),
          type: "success",
          icon: "nc-icon nc-bell-55",
          autoDismiss: 7,
        };
        notificationAlert.current.notificationAlert(options);
        history.push('/admin/dashboard');



    } catch (error) {
      const options = {
        place: "tr",
        message: (
          <div>
            <div>
             {error.response?.data?.message}
            </div>
          </div>
        ),
        type: "danger",
        icon: "nc-icon nc-simple-remove",
        autoDismiss: 7,
      };
      notificationAlert.current.notificationAlert(options);
    }
    
}



const [prisonerState, setPrisonerState] = useState({name:"" , prisonId:0 , crime:''})


const updatePrisoner= async(id ) =>{
  try {

      const res = await axios.put(`/api/prisoners/${id}` , prisonerState);
      setRefresh(!refresh)  
      const options = {
        place: "tr",
        message: (
          <div>
            <div>
              Prisoner Updated
            </div>
          </div>
        ),
        type: "success",
        icon: "nc-icon nc-bell-55",
        autoDismiss: 7,
      };
      notificationAlert.current.notificationAlert(options);
      setDisabled(false)
      setPrisonerId('')


  } catch (error) {
    const options = {
      place: "tr",
      message: (
        <div>
          <div>
           {error.response?.data?.message}
          </div>
        </div>
      ),
      type: "danger",
      icon: "nc-icon nc-simple-remove",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  }
  
}


const getSpecificPrisoners = async (id) =>{
  try {

if(id){


    const res = await axios.get(`/api/prisoners/${id}`)
    const options = {
      place: "tr",
      message: (
        <div>
          <div>
           Fetched Data
          </div>
        </div>
      ),
      type: "success",
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);

   setPrisonerState(JSON.parse(res.data)) 
  return true }

else{
  const options = {
    place: "tr",
    message: (
      <div>
        <div>
         Enter an id first!!
        </div>
      </div>
    ),
    type: "danger",
    icon: "nc-icon nc-bell-55",
    autoDismiss: 7,
  };
  notificationAlert.current.notificationAlert(options);

}

return false
  } catch (error) {
    
    const options = {
      place: "tr",
      message: (
        <div>
          <div>
            Error in fetching Prisoner's Data
          </div>
        </div>
      ),
      type: "success",
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);

    return false

  }
}


const[prisonerId,setPrisonerId] = React.useState("")

const[disabled,setDisabled] = React.useState(true)



    return (
       <ApiHandlerContext.Provider value={{prisonerId,userKaNaam,setPrisonerId,disabled,setDisabled,login,logout,prisonerState,getSpecificPrisoners, setPrisonerState,updatePrisoner ,addPrisoners,totalPrisons,totalPrisoners,totalUsers , loggedIn,refresh ,setRefresh ,register, setLoggedIn , getAllPrisoners , getAllUsers,getAllPrisons}}>
           <> <NotificationAlert ref={notificationAlert} />
           {props.children}</>
       </ApiHandlerContext.Provider>
    )
}

export default ApiHandlerState
