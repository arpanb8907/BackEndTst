import express from 'express' 
import 'dotenv/config'
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res)=>{
  res.send("Routed to user")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})