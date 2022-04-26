const bcrypt = require("bcrypt");


const isTheSameHash = (plainPassword, hashedPassword)=>{
    
    const comparePromise = new Promise((resolve,reject)=>{
        
        bcrypt.compare(plainPassword, hashedPassword, function(err, result) {
            
            if( err || !hash)
                reject(err);
            else
                resolve(result);
        });
    
    });

    return comparePromise;
    
}



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


module.exports.getHashedPassword = getHashedPassword;
module.exports.isTheSameHash = isTheSameHash;