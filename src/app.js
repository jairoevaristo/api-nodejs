const express= require('express');
const mongoose = require('mongoose');
require('./models/Products');
const router = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json());
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api', options)
.catch((error) => console.log('erro ao se conectar ao mongoDB: '+ error));


app.use(cors());
app.use('/api',router); 

app.listen(3001, () => console.log('servidor rodando'));