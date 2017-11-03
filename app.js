import express from 'express'
import bodyParser from 'body-parser'
const app = express()
require('babel-core/register')

app.use(bodyParser.urlencoded({ extended: true} ))
app.use(bodyParser.json())

app.use((req, res, next) => {

  const allowOrigins = ['http://localhost:8080', 'http://127.0.0.1:8080']
  const origin = req.headers.origin
  if(allowOrigins.indexOf(origin) > -1) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  return next();
})

app.use('/api/v1', require('./dev/routes'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler, will print stacktrace
if(app.get('ent') === 'development') {
  app.use((req, res, next) => {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// production error handler, no stacktrace leaked to user
app.use((req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})

app.listen(8080, () => {
  console.log("Server started on port 8080")
})

module.exports = app
