const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter.js')
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
// const Router = require('./routes/userRouter.js');
require("dotenv/config");
var corsOptions = {
    origin: "http://localhost:3000"
};
const app = express();

app.use(cors());
app.use(bodyParser.json());
// Persing requests of content-type (application/json)
app.use(express.json());
// this is a connector(middleman) 
app.use(cors(corsOptions));
// parse requests of content-type 
app.use(express.urlencoded({extended: true}));
app.use('/api/users', userRouter);
app.use('/api', routes);

// const dbase = require("./toDo/models");

// Connecting to the database
mongoose.connect(
    process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
      }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", ()=>{
    console.log("database connected successfully");
})

// Import Routers
// const tasksroute = require('./toDo/routes/tasks.routes');

// require("./toDo/routes/tasks.routes")(app);

// app.use(Router);
// // A home route
app.get('/', (req, res) => {
    res.send('Our backend services!')
})
//  require("./toDo/routes/tasks.routes.js");
// app.use(cors());
// listening for requests
app.listen(5000, () => {
    console.log("To-do list is being served at http://localhost:5000");
})