import generateUniqueId from "../utils/uID.js";

// Services
import fetchAllQuestions from "../database/services/questions/fetchAllQuestions.js";
import fetchQuestionById from "../database/services/questions/fetchQuestionById.js";
import addQuestion from "../database/services/questions/addQuestion.js";
import updateQuestion from "../database/services/questions/updateQuestion.js";
import deleteQuestion from "../database/services/questions/deleteQuestion.js";
import fetchQuestionsByType from "../database/services/questions/fetchQuestionsByType.js";

/**
 * Controller function to handle fetching all questions.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const fetchAllQuestionsController = async (req, res) => {
  try {
    const questions = await fetchAllQuestions();
    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle fetching questions by type.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const fetchQuestionsByTypeController = async (req, res) => {
  const { type } = req.params;
  try {
    const questions = await fetchQuestionsByType(type);
    res.status(200).json(questions);
  } catch (error) {
    console.error("Error fetching questions by type:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle fetching a question by ID.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const fetchQuestionByIdController = async (req, res) => {
  const questionId = req.params.id;
  try {
    const question = await fetchQuestionById(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json(question);
  } catch (error) {
    console.error("Error fetching question by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle adding a new question or multiple questions.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const addQuestionController = async (req, res) => {
  try {
    const questionsData = req.body;
    if (!Array.isArray(questionsData)) {
      // If the data is not an array, convert it to an array with a single element
      questionsData = [questionsData];
    }

    const promises = questionsData.map(async (questionData) => {
      const questionId = generateUniqueId(); // Generating a unique questionId
      questionData.questionId = questionId; // Assigning the generated questionId to the questionData
      await addQuestion(questionData);
    });

    await Promise.all(promises);

    res.status(200).json({ message: "Questions added successfully" });
  } catch (error) {
    console.error("Error adding question(s):", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


/**
 * Controller function to handle updating a question.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const updateQuestionController = async (req, res) => {
  const questionId = req.body.questionId;
  const updatedData = { ...req.body }; // Copy request body
  delete updatedData.questionId; // Remove questionId as it's not an attribute to update

  try {
    const updatedQuestion = await updateQuestion(questionId, updatedData);
    res
      .status(200)
      .json({ message: "Question updated successfully", updatedQuestion });
  } catch (error) {
    console.error("Error updating question:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle deleting a question.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const deleteQuestionController = async (req, res) => {
  const { questionId } = req.body;
  try {
    await deleteQuestion(questionId);
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    console.error("Error deleting question:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  addQuestionController,
  fetchAllQuestionsController,
  fetchQuestionByIdController,
  updateQuestionController,
  deleteQuestionController,
  fetchQuestionsByTypeController,
};
