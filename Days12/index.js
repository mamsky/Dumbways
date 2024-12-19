const express = require('express')
const path = require ('path')
const { formatDate, getRelativeTime } = require('./src/controller/timeFormat')
const hbs = require('hbs')

const app = express()
const port = 3000

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './src/pages'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/assets',express.static(path.join(__dirname, "/src/assets")) )
app.use('/style',express.static(path.join(__dirname, "/src/style")) )
app.use('/javascript',express.static(path.join(__dirname, "/src/javascript")) )

hbs.registerPartials(__dirname + '/src/partials')
hbs.registerHelper('equal', (a,b)=>{
  return a === b
})
hbs.registerHelper('formatDate', formatDate)
hbs.registerHelper('times', getRelativeTime)
const routerPages = require('./src/Router/RouterIndex')

app.use('/', routerPages)

app.listen(port, () => {
  console.log(`Running ${port}`)
})