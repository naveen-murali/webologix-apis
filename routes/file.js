const { Router } = require("express");
const { getFiles, downloadFile } = require("../controllers/file");

const router = Router();

router.route("/").get(getFiles);
router.route("/download").get(downloadFile);

module.exports = router;