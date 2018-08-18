
const bodyParser = require('body-parser')

module.exports = function(app) {
    app.get('/', async (req, res, next) =>{
        req.getConnection((err, connection)=>{
            connection.query('USE mysql', function(err) {
                //if (err) throw err;
                
                res.send('Query Successful');   
              });
        })
    })
    
    app.post(`/registration`, (req,user_name, user_email, user_logi, user_pass, user_role_id, done)=>{
        console.log(req)
        return(done)
    })
}