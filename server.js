const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

// rota que serve a API
app.get('/', async (req, res) => {
   try{
    // response é a resposta do axios MAS eu tiro odata de dentro do response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users') // queria consumir essa API https://nei22.github.io/NodeJs-Api/ mas  não consigo por hora 
    // console.log(data);
    return res.json(data)
   }catch(error){
       console.error(error);
   }
})
app.listen('4233')