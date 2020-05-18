export function list(req, res) {
	const { sort } = req.query
	console.log({ sort })
	res.json([])
}

export function create(req, res) {
	const { title, body } = req.body
	console.log(`${title} and ${body} received!`)
	res.send('ok')
}

export function read(req, res) {
	const { id } = req.params
	res.json({ id, title: 'a simple title', body: 'this is my note' })
}

export function update(req, res) {
	const { id } = req.params
	const { title, body } = req.body
	console.log(`updating ${id} with ${title} and ${body}`)
	res.send('update')
}

export function deleteNote(req, res) {
	const { id } = req.params
	console.log(`del ${id}`)
	res.send('delete')
}
