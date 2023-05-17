const path = require("path");

const ROOT_PATH = process.cwd();

const getFileFolderPath = () => path.join(ROOT_PATH, "files");
const getFilePathById = (id) => path.join(getFileFolderPath(), id);

module.exports = {
    ROOT_PATH,
    getFileFolderPath,
    getFilePathById
};