const asyncHandler = require("express-async-handler");
const { getFilePathById } = require("../utils/path");
const { HttpException } = require("../utils/exceptions");
const { getFileList, isFileExists } = require("../services/file");

module.exports.getFiles = asyncHandler(async (_req, res) => {
    res.status(200).json({ fileIds: await getFileList() });
});

module.exports.downloadFile = asyncHandler(async (req, res) => {
    const id = req.query.id;
    if (!id) {
        throw new HttpException(400, "please provide file id");
    }

    const filePath = getFilePathById(id);
    if (!await isFileExists(id)) {
        throw new HttpException(400, `file with id '${id}' is not found`);
    }

    return res.download(filePath, id);
});
