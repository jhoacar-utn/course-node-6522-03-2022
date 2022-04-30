const bcrypt = require('bcrypt');

const isTheSameHash = (plainPassword,hashedPassword) => {
    
    return bcrypt.compare(plainPassword,hashedPassword);
};

const getHashedPassword = (plainPassword) => {

    const saltRounds = parseInt(process.env.SALT_ROUNDS_BCRYPT || 10); //si o si devuelve un entero

    const encryptPromise = new Promise((resolved,rejected)=>{
        
        bcrypt.hash(plainPassword, saltRounds, function(err, hash) {

            if(err || !hash) {
                rejected(err);
            } else {
                resolved(hash);
            }

        });
    });
    
    return encryptPromise
};




module.exports = getHashedPassword;
module.exports = isTheSameHash;