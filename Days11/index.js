const express = require('express')
const path = require ('path')
const hbs = require('hbs')

const app = express()
const port = 3000

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './src/pages'))

// const indexRoutes = require('./src/Router/RouterIndex')
// app.use(express.json())

app.use('/assets',express.static(path.join(__dirname, "/src/assets")) )
app.use('/style',express.static(path.join(__dirname, "/src/style")) )
app.use('/javascript',express.static(path.join(__dirname, "/src/javascript")) )

hbs.registerPartials(__dirname + '/src/partials')

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/blog', (req, res)=>{
  res.render('blog')
})

app.get('/MyProject', (req, res)=>{
  res.render('task/MyProject')
})

app.get('/project-detail', (req, res)=>{
  res.render('task/project-detail')
})

// app.get('/project-detail', (req, res)=>{
//   res.render('task/project-detail')
// })
app.get('/contact', (req, res)=>{
  res.render('contact')
})
app.get('/testimonial', (req, res)=>{
  res.render('testimonial')
})

app.get('/test/:id/:lang', (req, res)=>{
  const {id, lang} = req.params
  const {name, title} = req.query //destructuring

  let language = lang
  if(lang == 'id'){
    language = 'Indonesia'
  }else{
    language
  }

  res.send(`Hallo world id: ${id}, language = ${language}, name: ${name} and Title: ${title}`)

})

app.listen(port, () => {
  console.log(`Running ${port}`)
})