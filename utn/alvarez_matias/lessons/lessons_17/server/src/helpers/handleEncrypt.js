const bcrypt = require("bcrypt");

const saltRounds = 10;

const isTheSameHash = (plainPassword, hashedPassword) => {

    return bcrypt.compare(plainPassword, hashedPassword);

}

const getHashedPassword = (plainPassword) => {

    const encryptPromise = new Promise((resolve, reject) => {

        bcrypt.hash(plainPassword, saltRounds, function (error, hash) {

            if (error || !hash)
                reject(error);
            else
                resolve(hash);
        });

    });

    return encryptPromise;

}


module.exports.getHashedPassword = getHashedPassword;
module.exports.isTheSameHash = isTheSameHash;