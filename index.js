const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/', (req, res) => {
    //res.send('Página principal')
    console.log(__dirname)
    res.render('index')
  })

  app.get('/informacion', (req, res) => {
    res.render('informacion',{
        titulo: "Sección de la informacion personal",
        descripcion: "Aquí encontrarás toda la información personal sobre Ana Ballén"
    })
  })
  
app.get('/educacion', (req, res) => {
    res.render('educacion',{
        titulo: "Sección Educación",
        descripcion: "Aquí encontrarás mi información académica"
    })
  })

app.get('/experienciaL', (req, res) => {
    res.render('experienciaL',{
        titulo: "Sección Experiencia Laboral",
        descripcion: "Aquí encontrarás toda la experiencia laboral"
    })
  })

  app.get('/RefPersonal', (req, res) => {
    res.render('RefPersonal',{
        titulo: "Sección Referencias personales",
        descripcion: "Aquí encontrarás las referencias personales"
    })
  })  

app.use((req,res,next) => {
   res.status(404).sendFile(__dirname+'/public/404.html') 
})

app.listen(port, () => {
  console.log(`Accede al servidor haciendo click aquí http://localhost:${port}`)
})