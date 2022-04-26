const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

const explorers = [
  { "id": 1, "name": 'Explorer1', "email": "launchx6789@innovaccion.mx" },
  { "id": 2, "name": 'Explorer2', "email": "launchx1237@innovaccion.mx" },
  { "id": 3, "name": 'Explorer3', "email": "launchx5417@innovaccion.mx" },
  { "id": 4, "name": 'Explorer4', "email": "launchx2136@innovaccion.mx" }
]

app.get('/v1/explorers', (request, response) => {
  response.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (request, response) => {
  const id = Number(request.params.id)
  const explorer = explorers.filter(explorer => explorer.id === id)
  response.status(200).json(explorer)
})

// Petición que simula la creación de un nuevo usuario.
app.post('/v1/explorers', (request, response) => {
  const requestBody = request.body
  response.status(201).json({ message: 'Created' })
})

// Petición que simula la actualización de un usuario.
app.put('/v1/explorers/:id', (request, response) => {
  const requestBody = request.body
  response.status(200).json({ message: 'Upadate!' })
})

// Petición que simula la eliminación de un usuario.
app.delete('/v1/explorers/:id', (request, response) => {
  const requestBody = request.body
  response.status(200).json({ message: 'Deleted' })
})