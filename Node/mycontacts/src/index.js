const express = require('express');

const routes = require('./routes');

app.use(routes);

const app = express();

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));

