const makeApp = require('./app.js')
const mongoose = require('./database');
const { port } = require('./vars.js');
const app = makeApp()

// open mongoose connection
mongoose.connect();

app.listen(port, () => console.log(`listening on port ${port}`))