const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/JobRoutes');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.end("<h1>Hello server started</h1>")
});

app.use('/api', jobRoutes);

mongoose.connect('mongodb+srv://vishalaynile1234:xu6hKTDXaNr3YNnW@jobpostingcluster0.sh5gp.mongodb.net/?retryWrites=true&w=majority&appName=jobPostingCluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err));



app.listen(3000, () => {
    console.log("server started");
    
})



// xu6hKTDXaNr3YNnW