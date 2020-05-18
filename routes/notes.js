export function list(req, res) {
	let { sort = 'desc' } = req.query
	const validSorts = new Set(['desc', 'asc'])
	if (!validSorts.has(sort.toLowerCase())) {
		return res.status(400).send('Invalid sort params')
	}
	console.log({ sort })
	res.json([])
}

export function create(req, res) {
	const { title, body } = req.body
	if (title === undefined || body === undefined) {
		return res.status(400).send('Missing title or body')
	}
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
	if (title === undefined && body === undefined) {
		return res.status(400).send('Missing title and body')
	}
	console.log(`updating ${id} with ${title} and ${body}`)
	res.send('update')
}

export function deleteNote(req, res) {
	const { id } = req.params
	console.log(`del ${id}`)
	res.send('delete')
}
