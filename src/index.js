const express = require('express')
const app = express()
const port = 3000;
const path = require('path')
const route = require("./routes/index");
const expressLayouts = require('express-ejs-layouts');

const { default: mongoose } = require('mongoose')

mongoose.set("strictQuery", true )
mongoose.connect('mongodb://localhost:27017/minidb')
    .then(res => console.log(`connect successfully!! ${res}`))
    .catch(error => console.log(error))
const methodOverride = require("method-override");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Use express-ejs-layouts middleware
app.use(expressLayouts);

// Set the default layout (layout.ejs)
app.set('layout', 'layout'); 


app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'resource', 'views'))
app.set('view engine', 'ejs')

route(app)

app.listen(port, () => console.log("Server is running on port: ", port));