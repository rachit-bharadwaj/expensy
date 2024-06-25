import generateUniqueId from "../utils/uID.js";

// services
import fetchAllExercises from "../database/services/exercises/fetchAllExercises.js";
import fetchExerciseById from "../database/services/exercises/fetchExerciseById.js";
import addExercise from "../database/services/exercises/addExercise.js";
import updateExercise from "../database/services/exercises/updateExercise.js";
import deleteExercise from "../database/services/exercises/deleteExercise.js";

/**
 * Controller function to handle fetching all Exercises.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const fetchAllExercisesController = async (req, res) => {
  try {
    const exercises = await fetchAllExercises();
    res.status(200).json(exercises);
  } catch (error) {
    console.error("Error fetching exercises:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle fetching a Exercise by ID.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const fetchExerciseByIdController = async (req, res) => {
  const exerciseId = req.params.id;
  try {
    const exercise = await fetchExerciseById(exerciseId);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.status(200).json(exercise);
  } catch (error) {
    console.error("Error fetching Exercise by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle adding a new Exercise.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const addExerciseController = async (req, res) => {
  const exerciseDetails = req.body;
  const exerciseId = generateUniqueId(); // Generating a unique exerciseId
  exerciseDetails.exerciseId = exerciseId; // assigning the generated exerciseId to the exerciseDetails
  try {
    await addExercise(exerciseDetails);
    res.status(200).json({ message: "Exercise added successfully" });
  } catch (error) {
    console.error("Error adding exercise:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateExerciseController = async (req, res) => {
  const exerciseId = req.body.exerciseId;
  const updatedData = { ...req.body }; // Copy request body
  delete updatedData.exerciseId; // Remove exerciseId as it's not an attribute to update

  try {
    const updatedExercise = await updateExercise(exerciseId, updatedData);
    res
      .status(200)
      .json({ message: "Exercise updated successfully", updatedExercise });
  } catch (error) {
    console.error("Error updating exercise:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Controller function to handle deleting a Exercise.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const deleteExerciseController = async (req, res) => {
  const { exerciseId } = req.body;
  try {
    await deleteExercise(exerciseId);
    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    console.error("Error deleting Exercise:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};






export {
  addExerciseController,
  fetchAllExercisesController,
  fetchExerciseByIdController,
  updateExerciseController,
  deleteExerciseController,
};
