const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = require("./models/index");
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Server connected to database!!...");
}).catch(error =>{
    console.log("Server can't be connect to databe", error);
    process.exit
});

app.get('/', (req, res) => {
    res.send('Welcome to mkPlatForm!!!...')
})

require('./routes/productInventory.routes')(app);
  
  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})