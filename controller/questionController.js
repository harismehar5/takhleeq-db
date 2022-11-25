const Question = require("../models/question");

exports.addQuestion = async (req, res) => {
  const options_list = [];
  if (
    req.body.options === null ||
    req.body.options === undefined ||
    req.body.options.length <= 0
  ) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
    });
  } else {
    for (let i = 0; i < req.body.options.length; i++) {
      options_list.push({
        option: req.body.options[i].option,
        description: req.body.options[i].description,
        is_correct: req.body.options[i].is_correct,
        is_active: req.body.options[i].is_active,
      });
    }
  }
  const question = new Question({
    question: req.body.question,
    is_active: req.body.is_active,
    topic: req.body.topic_id,
    options: options_list,
  });
  try {
    const response = await question.save();
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
exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate({ path: "options" });
    if (questions.length !== 0) {
      res.json({ error: false, questions: questions });
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
    const response = await Question.findById(req.params.id).populate({
      path: "options",
    });
    res.json({ error: false, question: response });
  } catch (err) {
    res.json({
      error: true,
      error_msg: "No Data Found",
      response: err.toString(),
    });
  }
};

exports.updateById = async (req, res) => {
  try {
    const options_list = [];
    if (
      req.body.options === null ||
      req.body.options === undefined ||
      req.body.options.length <= 0
    ) {
      res.json({
        error: true,
        error_msg: "Something went wrong...!",
      });
    } else {
      for (let i = 0; i < req.body.options.length; i++) {
        options_list.push({
          option: req.body.options[i].option,
          description: req.body.options[i].description,
          is_correct: req.body.options[i].is_correct,
          is_active: req.body.options[i].is_active,
        });
      }
    }
    const response = await Question.updateOne(
      { _id: req.params.id },
      {
        $set: {
          question: req.body.question,
          is_active: req.body.is_active,
          topic: req.body.topic_id,
          options: options_list,
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
    const response = await Question.updateOne(
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
    const response = await Question.deleteOne({ _id: req.params.id });
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
