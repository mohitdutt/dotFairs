const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const schema = require('./schema/index');
require('./db/mongoose');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(bodyParser.json());

const port = process.env.port || 3000

// const router = require('./routers');
// app.use(router);
// const route = express.Router();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, ()=>{
    console.log(`server running at port ${port}`)
});