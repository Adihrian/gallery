const mongoose = require('mongoose');
const config = require('./_config');

const env = 'development';

console.log('Connecting to MongoDB...');

mongoose.connect(config.mongoURI[env], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log(`Successfully connected to MongoDB (${env})`);
    return mongoose.connection.close();
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});



