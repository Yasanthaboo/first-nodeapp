const express = require('express')
const app=express()

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
app.listen(3000,()=>{
    console.log('Server started in port 3000')
}) 