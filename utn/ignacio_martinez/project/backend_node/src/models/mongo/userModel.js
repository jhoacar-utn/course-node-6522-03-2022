const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
    image: String
});

const User = mongoose.model("user", userSchema);

const customCreate = async (dataUser)=> {
    const user = new User(dataUser);
    await user.save();
    return user;
};

const customUpdate = async (dataToFind, dataToUpdate)=> {
    await User.updateOne(dataToFind, dataToUpdate)
};

const customFind = async (dataToFind)=> {
    const user = await User.findOne(dataToFind).lean().exec();
    return user;
};


User.customCreate = customCreate;

User.customUpdate = customUpdate;

User.customFind = customFind;


module.exports = User;