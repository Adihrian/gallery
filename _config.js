var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://adih123:adih123@gallerycluster.cf7kn7q.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://adih123:adih123@gallerycluster.cf7kn7q.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://adih123:adih123@gallerycluster.cf7kn7q.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
