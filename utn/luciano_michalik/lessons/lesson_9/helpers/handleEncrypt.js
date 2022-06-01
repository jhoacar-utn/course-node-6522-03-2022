const bcrypt = require("bcrypt");


const isTheSameHash = (plainPassword, hashedPassword)=>{
    
    return bcrypt.compare(plainPassword, hashedPassword); //From documentation of bcrypt
    
}



const getHashedPassword = (plainPassword) =>{

    const saltRounds = parseInt(process.env.SALT_ROUNDS_BCRYPT || 10); //if is not declared SALT_ROUNDS_BCRYPT, use 10. Be carefull, use parseInt!!

    
    const encryptPromise = new Promise((resolve,reject)=>{ //Siempre que haga una promesa de esta forma tengo que mandar el resolve y reject que harían las veces de un ".then" y un ".catch"
        
        bcrypt.hash(plainPassword, saltRounds, function(err, hash) { //From documentation

            if( err || !hash)
                reject(err); //Seria como el catch
            else
                resolve(hash); //Seria como el then
        });
    
    });

    return encryptPromise;
   
}


module.exports.getHashedPassword = getHashedPassword;
module.exports.isTheSameHash = isTheSameHash;