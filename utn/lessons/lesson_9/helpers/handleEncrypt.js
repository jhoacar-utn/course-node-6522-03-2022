const bcrypt = require("bcrypt");



const getHashedPassword = (plainPassword) =>{

    const saltRounds = parseInt(process.env.SALT_ROUNDS_BCRYPT || 10);

    
    const encryptPromise = new Promise((resolve,reject)=>{
        
        bcrypt.hash(plainPassword, saltRounds, function(err, hash) {

            if( err || !hash)
                reject(err);
            else
                resolve(hash);
        });
    
    });

    return encryptPromise;
   
}


module.exports = getHashedPassword;