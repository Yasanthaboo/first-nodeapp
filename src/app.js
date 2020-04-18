const express = require('express')
const app=express()

const port = process.env.PORT ||3000

app.get('', (req, res)=> {
    res.send('Hello World!')
  })
  app.get('/help', (req, res)=> {
    res.send('Help')
  })

  app.get('/about', (req, res)=> {
    res.send('About page')
  })

  app.get('/weather', (req, res)=> {
    res.send('Weather Page')
  })
app.listen(port,()=>{
    console.log('Server started in port '+port)
}) 