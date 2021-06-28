var express = require('express')
var router = express.Router()
const getDataFromFile = require('./getDataFromFile')
const {DefaultPrisonsList,DefaultPrisonersList} = require('./defaultData')
const fs = require("fs");
const { json } = require('express');
const { exit } = require('process');











router.get("/", async (req, res) => {
    let a = getDataFromFile("./files/prisoners.txt", DefaultPrisonersList);
    // console.log(result)
    a=JSON.parse(a)
    res.json(a);
  });




  router.get("/:id", async (req, res) => {
    let a = getDataFromFile("./files/prisoners.txt", DefaultPrisonersList);
    // console.log(result)
    
    let {id} = req.params ; 
    let listOfPrisoner = JSON.parse(a);

    for(let i = 0 ; i<listOfPrisoner.length ; i++)
{
  if(listOfPrisoner[i].id === parseInt(id)){
    res.json(JSON.stringify(listOfPrisoner[i]));
    return
  }
}    
    
    
    res.status(404).json({message:'No Id Found'});
    return


  });





  
  router.post("/", async (req, res) => {
    let dataFromFile = getDataFromFile("./files/prisoners.txt", DefaultPrisonersList);
  
    let listOfPrisoner = JSON.parse(dataFromFile);
  
    let length = listOfPrisoner[listOfPrisoner.length-1].id + 1;
    let object1 = {
      name: req.body.name,
      crime: req.body.crime,
      id: length,
      prisonId:req.body.prisonId
    };


try {
  const prisonData  = JSON.parse(fs.readFileSync("./files/prisons.txt", { encoding: "utf8", flag: "r" }));
  
  for(let i=0 ; i<prisonData.length ; i++){
    if (req.body.prisonId === prisonData[i].id){
      object1.prisonName = prisonData[i].name
      listOfPrisoner.push(object1);

      fs.writeFileSync("./files/prisoners.txt", JSON.stringify(listOfPrisoner));
          res.json(JSON.stringify(listOfPrisoner));
      return;
    }
  }
  res.status(401). json({message:'Cannot find a prison with the given ID'});
return

  
} catch (error) {
  res.status(401). json({message:'Server error'});
  return
  
}

    
   
  });








  
  router.put("/:id", async (req, res) => {
    let { id } = req.params;
      id = parseInt(id);
    
    try{
      let dataFromFile = getDataFromFile("./files/prisoners.txt", DefaultPrisonersList);
      let listOfPrisoner = JSON.parse(dataFromFile);
      const prisonData  = JSON.parse(fs.readFileSync("./files/prisons.txt", { encoding: "utf8", flag: "r" }));
      let cont = false
      let prisonerFound = false

      prisonData.forEach(element => {
        if(parseInt(req.body.prisonId) === element.id){
          cont = true;
        }else{
          
        }})
        if(cont){
            listOfPrisoner.forEach((element,i) => {
              if(parseInt(element.id) === parseInt(id)){
                prisonerFound=true
                listOfPrisoner[i].prisonId = req.body.prisonId
                listOfPrisoner[i].name = req.body.name
                listOfPrisoner[i].crime = req.body.crime

                prisonData.forEach(element => {
                  if(parseInt(req.body.prisonId) === element.id){
                    listOfPrisoner[i].prisonName = element.name
                  }
                })
                fs.writeFileSync("./files/prisoners.txt", JSON.stringify(listOfPrisoner));
  
                
                res.json(JSON.stringify(listOfPrisoner));
                return             }

            });

            if(!prisonerFound){
              return res.status(401).json({message:'No Prisoner Found with the given id'})
          
            }
        }
        else{
          return  res.status(401).json({message:'No Prison Found with the given id'})
          
        }

    





    }catch(error){
      res.status(401).json({message:'Server error'})
      return
    }
    

  });
  
  
  router.delete("/:id", async (req, res) => {
      let { id } = req.params;
      id = parseInt(id);
      let dataFromFile = getDataFromFile("./files/prisoners.txt", DefaultPrisonersList);
      let listOfPrisoner = JSON.parse(dataFromFile);
      listOfPrisoner.splice(id-1, 1);
      fs.writeFileSync("./files/prisoners.txt", JSON.stringify(listOfPrisoner));
      res.json(JSON.stringify(listOfPrisoner));
  })
  
  
  module.exports = router