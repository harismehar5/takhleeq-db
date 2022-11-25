const Class = require("../models/class");

exports.addClass = async (req, res) => {
  const classData = new Class({
    name: req.body.name,
    description: req.body.description,
    primary_color: req.body.primary_color,
    secondary_color: req.body.secondary_color,
    is_published: req.body.is_published,
    is_active: req.body.is_active,
  });
  try {
    const response = await classData.save();
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
exports.getClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    if (classes.length !== 0) {
      res.json({ error: false, classes: classes });
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
    const response = await Class.findById(req.params.id);
    if (response === null) {
      res.json({
        error: true,
        error_msg: "No Data Found",
      });
    } else {
      res.json({ error: false, class: response });
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
    const response = await Class.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          primary_color: req.body.primary_color,
          secondary_color: req.body.secondary_color,
          is_published: req.body.is_published,
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

exports.updateStatus = async (req, res) => {
  try {
    const response = await Class.updateOne(
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
    const response = await Class.deleteOne({ _id: req.params.id });
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
