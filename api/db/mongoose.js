const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dotfairs', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', ()=>{
    console.log('connected to database')
})