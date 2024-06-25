import fetchAllExercises from "../database/services/exercises/fetchAllExercises.js";

const categoryToExercisesMap = {
  "Muscle weakness": [1, 2, 3, 4, 7, 8, 10, 17, 18, 19],
  "Decreased Mobility": [1, 2, 3, 4, 6, 7, 8, 10, 17, 18, 19],
  "Joint stiffness and pain": [1, 2, 3, 4, 6, 7, 8, 17, 18, 19],
  "Muscle stiffness": [1, 2, 3, 4, 6, 7, 8, 10, 17, 18, 19],
  "Altered Balance": [1, 2, 3, 7, 8, 11, 12, 13, 14, 15, 18, 19],
};

const NUM_EXERCISES_PER_CATEGORY = 5;

const fetchExercisesBasedOnQuestions = async (req, res) => {
  try {
    const { userAnswers } = req.body;

    // Extract questions answered with "Yes"
    const answeredYes = userAnswers.filter(answer => answer.answer === "Yes");

    // Determine categories based on the answered questions
    const categories = answeredYes.map(answer => {
      if (answer.questionId >= 1 && answer.questionId <= 2) return "Muscle weakness";
      if (answer.questionId >= 3 && answer.questionId <= 4) return "Decreased Mobility";
      if (answer.questionId >= 5 && answer.questionId <= 6) return "Joint stiffness and pain";
      if (answer.questionId >= 7 && answer.questionId <= 8) return "Muscle stiffness";
      if (answer.questionId >= 9 && answer.questionId <= 11) return "Altered Balance";
    });

    // Count the occurrence of each category
    const categoryCounts = categories.reduce((acc, category) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    // Find the category with the maximum count
    const mostAnsweredCategory = Object.keys(categoryCounts).reduce((a, b) => categoryCounts[a] > categoryCounts[b] ? a : b);

    // Fetch all exercises and filter exercises based on the most answered category
    const exercises = await fetchAllExercises();
    const selectedExercises = exercises.filter(exercise => categoryToExercisesMap[mostAnsweredCategory].includes(exercise.rank));

    // Randomize the selected exercises if needed
    const randomizedExercises = selectedExercises.sort(() => Math.random() - 0.5);

    // Return the first 5 exercises (or less if there are fewer exercises)
    const recommendedExercises = randomizedExercises.slice(0, Math.min(NUM_EXERCISES_PER_CATEGORY, randomizedExercises.length));

    res.status(200).json(recommendedExercises);
  } catch (error) {
    console.error("Error fetching exercises based on questions:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default fetchExercisesBasedOnQuestions;
