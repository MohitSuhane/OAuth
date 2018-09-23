const express = require('express');
const authRoute = require('./routes/auth.routes');
const passportSetup = require('./config/passport.setup');
const app = express();
//set up view engine
app.set('view engine', 'ejs');

//set uo routes
app.use('/auth', authRoute);

//create home route
app.get('/', (req, res) => {
    res.render('home');
})
app.listen(3000, () => {
    console.log("app listening on port 3000");
})
