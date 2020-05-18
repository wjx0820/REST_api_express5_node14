import express from 'express'
import morgan from 'morgan'
import routes from './routes/index.js'

const app = express()

app.use(morgan('dev'))

// app.get('/', function (req, res) {
// 	res.send('hello')
// })

// app.get('/error', function (req, res) {
// 	throw new Error('opps I made an error!')
// })

app.use(routes)

app.use(function (req, res) {
	res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send(err.message)
})

app.listen(3000, function () {
	console.log('app listening on port 3000')
})
