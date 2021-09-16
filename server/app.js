const express = require('express');
const app = express();
const dotenv = require("dotenv");
var cookieParser = require('cookie-parser')

app.use(cookieParser())


dotenv.config({ path: './config.env' });

app.use(express.json());
app.use(require('./router/auth'));

require('./db/conn');



// const User = require('./model/userSchema');

const PORT = process.env.PORT;




app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})
