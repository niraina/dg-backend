const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const port = 3500

//connect to database
connectDB()

const app = express()

// Activer CORS pour toutes les ressources
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/type', require('./routes/type.route'))
app.use('/categorie', require('./routes/categorie.route'))
app.use('/departement', require('./routes/departement.route'))
app.use('/product', require('./routes/product.route'))

//Run server
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
})