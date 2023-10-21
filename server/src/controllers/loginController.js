const connection = require('../models/db')
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) =>{
    const {username, password} = req.body;
    const consult = 'SELECT * FROM login WHERE username = ? AND password = ?'

    try{
        connection.query(consult, [username, password], (err, result) => {
            if(err){
                res.send(err);
            }
            
            {/*Se creo el token, se firmo y se agrega tiempo de expiracion*/}
            if(result.length > 0){
                const token = jwt.sign({username}, "Stack",{
                    expiresIn: '3m'
                } )
                
                {/*Enviar respuseta al servidor*/}
                res.send({token});

            } else {
                console.log('wrong user')
                res.send({message: 'wrong user'})
            }
        })
    } catch (e) {

    }
}