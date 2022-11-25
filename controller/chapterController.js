const Chapter = require("../models/chapter");

exports.addChapter = async (req, res) => {
  const chapter = new Chapter({
    name: req.body.name,
    is_active: req.body.is_active,
    subject: req.body.subject_id,
  });
  try {
    const response = await chapter.save();
    res.json({
      error: false,
      success_msg: "Data submitted successfully",
      response: response,
    });
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};
exports.getChapters = async (req, res) => {
  try {
    const chapters = await Chapter.find();
    if (chapters.length !== 0) {
      res.json({ error: false, chapters: chapters });
    } else {
      res.json({
        error: true,
        error_msg: "No data found...!",
      });
    }
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};
exports.getById = async (req, res) => {
  try {
    const response = await Chapter.findById(req.params.id);
    if (response === null) {
      res.json({
        error: true,
        error_msg: "No Data Found",
      });
    } else {
      res.json({ error: false, chapter: response });
    }
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong",
      response: err.toString(),
    });
  }
};

exports.updateById = async (req, res) => {
  try {
    const response = await Chapter.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          is_active: req.body.is_active,
          subject: req.body.subject_id,
        },
      }
    );
    res.json({
      error: false,
      success_msg: "Data updated successfully",
      response: response,
    });
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const response = await Chapter.updateOne(
      { _id: req.params.id },
      {
        $set: {
          is_active: req.body.is_active,
        },
      }
    );
    res.json({
      error: false,
      success_msg: "Data updated successfully",
      response: response,
    });
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const response = await Chapter.deleteOne({ _id: req.params.id });
    res.json({
      error: false,
      success_msg: "Data removed successfully",
      response: response,
    });
  } catch (err) {
    res.json({
      error: true,
      error_msg: "No Data Found",
      response: err.toString(),
    });
  }
};
