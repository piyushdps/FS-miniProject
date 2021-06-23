import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiHandlerContext from './ApiHandlerContext'
import Cookies from 'js-cookie';
import NotificationAlert from "react-notification-alert";
const ApiHandlerState = (props) => {
    const notificationAlert = React.useRef();
  
    const[dashboardData ,setDashboardData] = useState({prison:0 , prisoner:0, user:0 })
    const totalPrisons = dashboardData.prison;
    const totalPrisoners = dashboardData.prisoner;
    const totalUsers=dashboardData.user;
    
    const [refresh, setRefresh] = React.useState(false);


    const [loggedIn, setLoggedIn] = React.useState(false);


    useEffect(()=>{
    
      checkLogin()
    },[refresh])
  

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
    } catch (error) {
        
    }
    
}






    return (
       <ApiHandlerContext.Provider value={{login,logout ,totalPrisons,totalPrisoners,totalUsers , loggedIn,refresh ,setRefresh ,register, setLoggedIn , getAllPrisoners , getAllUsers,getAllPrisons}}>
           <> <NotificationAlert ref={notificationAlert} />
           {props.children}</>
       </ApiHandlerContext.Provider>
    )
}

export default ApiHandlerState
