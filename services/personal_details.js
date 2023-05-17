const mongoose = require("mongoose");

const PersonalDetailsModelName = "PersonalDetails";
const PersonalDetailsCollectionName = "personal_details";
const personalDetailsModel = {
    modal: null
};

const getPersonalDetailsModel = () => !!personalDetailsModel.modal;

const createPersonalDetailsModel = () => {
    const personalDetailsSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    });
    personalDetailsModel.modal = mongoose.model(PersonalDetailsModelName, personalDetailsSchema, PersonalDetailsCollectionName);

    return personalDetailsModel.modal;
};

const createPersonalDetailsModel_2 = (data) => {
    const schemaStructure = {};
    for (const entrie of Object.entries(data)) {
        schemaStructure[entrie[0]] = entrie[1].constructor;
    }

    const personalDetailsSchema = new mongoose.Schema(schemaStructure);
    personalDetailsModel.modal = mongoose.model(PersonalDetailsModelName, personalDetailsSchema, PersonalDetailsCollectionName);

    return personalDetailsModel.modal;
};

const deletePersonalDetailsModel = () => {
    delete mongoose.connection.models[PersonalDetailsModelName];
    personalDetailsModel.modal = null;
};

const createNewPersonalDetails = async (details) => {
    const newPersonalDetails = new personalDetailsModel.modal(details);
    await newPersonalDetails.save();

    deletePersonalDetailsModel();
    return newPersonalDetails;
};

module.exports = {
    getPersonalDetailsModel,
    createPersonalDetailsModel,
    createPersonalDetailsModel_2,
    deletePersonalDetailsModel,
    createNewPersonalDetails
};
