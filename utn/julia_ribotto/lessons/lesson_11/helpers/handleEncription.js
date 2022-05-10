const bcrypt = require('bcrypt');
const {saltRounds} = require("../config/config")

const isTheSameHash = (plainPassword,hashedPassword) => {
    
    return bcrypt.compare(plainPassword, hashedPassword);
};

const getHashedPassword = (plainPassword) => {

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




module.exports.getHashedPassword = getHashedPassword;
module.exports.isTheSameHash = isTheSameHash;