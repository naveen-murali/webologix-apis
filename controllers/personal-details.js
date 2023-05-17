const asyncHandler = require("express-async-handler");
const { createPersonalDetailsModel, createNewPersonalDetails, getPersonalDetailsModel } = require("../services/personal_details");

module.exports.createPersonalDetails = asyncHandler(async (req, res) => {
    let responseData = { message: "personal details schema created" };

    if (!getPersonalDetailsModel()) {
        createPersonalDetailsModel(req.body);
    } else {
        const newPersonalDetails = await createNewPersonalDetails(req.body);
        responseData = newPersonalDetails;
    }

    return res.status(201).json(responseData);
});
