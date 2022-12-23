import express from 'express'

const PORT = 9898

const app = express()

app.use(express.static('./assets'))
app.use(express.static('./assets/public'))
app.use(express.static('./assets/views'))

app.listen(PORT, () => console.log('Runs', PORT))