module.exports = {
    secret: '1234',
        tourdd: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        port: 3306,
        database: 'lpru_conference',
    },tourcoth:{
        host: 'localhost',
        user: 'root',
        password: 'password',
        port: 3306,
        database: 'lpru_conference',
        multipleStatements: true
    },
    emailOption:{
        API_KEY:'',
        DOMAIN:''
    },corsOptions:{
        origin: 'http://example.com',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
      }
}
