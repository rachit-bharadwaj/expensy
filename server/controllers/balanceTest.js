import addTest from "../database/services/balanceTests/addTest.js";
import fetchAllTests from "../database/services/balanceTests/fetchAllTests.js";
import fetchTestById from "../database/services/balanceTests/fetchTestById.js";
import updateTest from "../database/services/balanceTests/updateTest.js";
import deleteTest from "../database/services/balanceTests/deleteTest.js";

import generateUniqueId from "../utils/uID.js";

/**
 * Controller function to handle fetching all tests.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const fetchAllTestsController = async (req, res) => {
  try {
    const tests = await fetchAllTests();
    res.status(200).json(tests);
  } catch (error) {
    console.error("Error fetching all tests:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle fetching a test by ID.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const fetchTestByIdController = async (req, res) => {
  const testId = req.params.id;
  try {
    const test = await fetchTestById(testId);
    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json(test);
  } catch (error) {
    console.error("Error fetching test by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle adding a new test.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const addTestController = async (req, res) => {
  const testDetails = req.body;
  const testId = generateUniqueId(); // Generating a unique testId
  testDetails.testId = testId; // assigning the generated testId to the testDetails
  try {
    await addTest(testDetails);
    res.status(200).json({ message: "Test added successfully" });
  } catch (error) {
    console.error("Error adding test:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTestController = async (req, res) => {
  const testId = req.body.testId;
  const updatedData = { ...req.body }; // Copy request body
  delete updatedData.testId; // Remove testId as it's not an attribute to update

  try {
    const updatedTest = await updateTest(testId, updatedData);
    res.status(200).json({ message: "Test updated successfully", updatedTest });
  } catch (error) {
    console.error("Error updating test:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


/**
 * Controller function to handle deleting a test.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const deleteTestController = async (req, res) => {
  const { testId } = req.body;
  try {
    await deleteTest(testId);
    res.status(200).json({ message: "Test deleted successfully" });
  } catch (error) {
    console.error("Error deleting test:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  fetchAllTestsController,
  fetchTestByIdController,
  addTestController,
  updateTestController,
  deleteTestController,
};
