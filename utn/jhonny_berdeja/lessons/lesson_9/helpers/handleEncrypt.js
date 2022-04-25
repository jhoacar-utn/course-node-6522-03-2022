
const bcrypt = require("bcrypt");


const getHashedPassword = (plainPassword) =>{

        const saltRounds = process.env.SALT_ROUNDS_BCRYPT || 10;

        const encryptPromise = new Promise((resolve, reject) =>{
    
            bcrypt.hash(plainPassword, saltRounds, function(err, hash){
                if(err || !hash)
                reject("Password doesn't hashed");
                else
                    resolve(hash);
            });
        
        });

        return encryptPromise;

}