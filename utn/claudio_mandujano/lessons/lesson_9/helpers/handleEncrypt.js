
const bcrypt = require("bcrypt");


const isTheSameHash = (plainPassword,getHashedPassword)=>{
  
    
    return bcrypt.compare(plainPassword,getHashedPassword); 
}

const getHashedPassword = (plainPassword) =>{

        const saltRounds = parseInt(process.env.SALT_ROUNDS_BCRYPT || 10);

        const encryptPromise = new Promise((resolve, reject) =>{
    
            bcrypt.hash(plainPassword, saltRounds, function(err, hash){
                
                    console.log(err,hash);
                if(err || !hash)
                reject("Password doesn't hashed");
                else
                    resolve(hash);
            });
        
        });

        return encryptPromise;

}





module.exports.getHashedPassword = getHashedPassword;
module.exports.isTheSameHash = isTheSameHash