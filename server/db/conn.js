const mongoose = require('mongoose');


const DB = process.env.MONGO_URL;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection successful...`);
}).catch((err) => console.log(`no connection`));