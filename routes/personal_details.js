const { Router } = require("express");
const { createPersonalDetails } = require("../controllers/personal-details");

const router = Router();

router.route("/").post(createPersonalDetails);

module.exports = router;