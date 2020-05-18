import * as Note from '../model/note.js'

export function list(req, res) {
	let { sort = 'desc' } = req.query
	const validSorts = new Set(['desc', 'asc'])
	if (!validSorts.has(sort.toLowerCase())) {
		return res.status(400).send('Invalid sort params')
	}
	const notes = Note.getNotes(sort)
	res.json({ notes })
}

export async function create(req, res) {
	const { title, body } = req.body
	if (title === undefined || body === undefined) {
		return res.status(400).send('Missing title or body')
	}
	const note = await Note.createNote({ title, body })
	console.log({ note })
	res.send('ok')
}

export function read(req, res) {
	const { id } = req.params
	const note = Note.getNote(id)
	res.json({ note })
}

export async function update(req, res) {
	const { id } = req.params
	const { title, body } = req.body
	if (title === undefined && body === undefined) {
		return res.status(400).send('Missing title and body')
	}
	const note = await Note.updateNote(id, { title, body })
	console.log({ note })
	res.send('update')
}

export function deleteNote(req, res) {
	const { id } = req.params
	const success = Note.deleteNote(id)
	console.log(`deleting ${id}`, success)
	res.send('delete')
}
