const fs = require("fs");
const { getFileFolderPath } = require("../utils/path");

const getFileList = () => {
    return new Promise((resolve, reject) => {
        const fileDirPath = getFileFolderPath();

        fs.readdir(fileDirPath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
};

const isFileExists = async (id) => {
    const files = await getFileList();
    console.log(files, files.some(file => file === id));
    return files.some(file => file === id);
};

module.exports = {
    getFileList,
    isFileExists
};
