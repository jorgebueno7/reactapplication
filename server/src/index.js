const express = require('express')
const app = express()
const sequelize = require('./db/database')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3000

async function main() {
    try{
        sequelize.sync({ force: false })
        sequelize.authenticate()
        console.log('Conexión establecida')
    }catch(error){
        console.log(error)
    }
}

app.set('json spaces', 2)
app.use(express.json())
app.use(cors())

app.use('/api/v1/users', require('./routes/users'))
app.use('/api/v1/products', require('./routes/products'))
app.use('/api/v1/creditcards', require('./routes/creditcards'))
app.use('/api/v1/brands', require('./routes/brands'))
app.use('/api/v1/orders', require('./routes/orders'))

const swaggerSpec = {
    definition: {
        openapi: "3.0.0", 
        info: {
            title: "Gymfood API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: [ `${path.join(__dirname, "./doc/*.js")}` ]
}

app.use('/api/v1/doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.listen(PORT, () => {
    console.log(`Running server on port` , PORT)
})

main()