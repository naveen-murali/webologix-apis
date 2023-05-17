const mogoose = require("mongoose");

module.exports.connectDb = async () => {
    try {
        await mogoose.connect(process.env.MONGO_URL);
        console.log("[DB connected]");
    } catch (error) {
        console.error(error);
    }
};