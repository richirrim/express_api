const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

app.get('/api/msj', (request, response) => {
  response.send('test')
})