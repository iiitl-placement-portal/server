const CompanyModel = require('../database/models/company.model')

const postSaveExtSources = async (req, res, next) => {
  try {
    // console.log(req.body);
    await req.body.map(async (company) => {
      let newEntry = new CompanyModel(company);
      newEntry = await newEntry.save();
    });
    res.status(200).send("OK");
  } catch (err) {
    next(err);
  }
};

module.exports = postSaveExtSources
