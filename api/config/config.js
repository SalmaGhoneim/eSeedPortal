module.exports = {
    BACKENDEND_URI: process.env.BACKENDEND_URI || 'http://localhost:3000/',
    ENV: 'dev',
    FRONTEND_URI: process.env.FRONTEND_URI || 'http://localhost:4200/',
    MONGO_URI: process.env.DATABASE_URL || 'mongodb://localhost:27017/eSeed',
    SECRET: process.env.API_KEY || 'this.is.a.secret'
};