const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );




app.get('/api/inventory', controller.read)
app.post( '/api/product', controller.post );



massive(process.env.CONNECTION_STRING).then( connection => {
  app.set('db', connection)
  
  const port = process.env.PORT || 5000;
  app.listen( port, () => { console.log(`Server listening on port ${port}.`); 
  });
})


