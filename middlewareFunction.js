const { DefaultPrisonersList, DefaultPrisonsList } = require("./defaultData");
const getDataFromFile = require("./getDataFromFile");
const fs = require("fs");

const loginCheckMiddleWare = (req,res,next) =>{

    if (!req.cookies.token || req.cookies.token !== 'encryptedstring'  ) return res.status(401).json({message:'Please Login '});

    console.log('Logged In ✔️');
    try {
    checkAndUpdate()
        
    } catch (error) {
        
    }
    next();



}



const checkAndUpdate = () =>{

    let PrisonersList =JSON.parse( getDataFromFile("./files/prisoners.txt", DefaultPrisonersList));
    let PrisonsList =JSON.parse( getDataFromFile("./files/prisons.txt", DefaultPrisonsList));
     
    PrisonsList.forEach((prison , i) =>{
      PrisonsList[i].availableSpace = prison.occupancy 
          PrisonersList?.forEach((prisoner , j ) =>{
              if(prisoner.prisonId === prison.id){
                PrisonsList[i].availableSpace --
              }
  
          })
  })
  
  fs.writeFileSync("./files/prisons.txt", JSON.stringify(PrisonsList));
  }
  
module.exports = loginCheckMiddleWare