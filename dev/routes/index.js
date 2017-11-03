import express from 'express'
import service from '../services/index'
const app = express.Router()

app.route('/forEach')
  .post(service.forEachFunction)

app.route('/Map')
  .post(service.mapFunction)

app.route('/Filter')
  .post(service.filterFunction)

app.route('/Find')
  .post(service.findFunction)

app.route('/Every')
  .post(service.everyFunction)

app.route('/Some')
  .post(service.someFunction)

module.exports = app
