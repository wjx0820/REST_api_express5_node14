import express from 'express'
import morgan from 'morgan'
import routes from './routes/index.js'

const app = express()

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }))

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
