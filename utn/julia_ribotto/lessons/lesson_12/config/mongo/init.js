
const initConnection = async () => {
    try {
        await require("./connection");
        console.log("connection with mongo established");
    } catch {
        console.error("unable to connect to the database:",error);
    }
};

module.exports = initConnection;