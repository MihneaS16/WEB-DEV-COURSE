const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin');

app.use('/shelters', shelterRoutes); // take all the routes from shelter, apply them to our app, and prefix them with '/shelters' 
// so this allows us to reuse code written for routes
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Serving app on localhost:3000');
});