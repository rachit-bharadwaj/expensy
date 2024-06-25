import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema(
  {
    groupName: {
      type: String,
      required: true,
      trim: true,
    },

    groupDescription: {
      type: String,
      default: "",
    },

    expenses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Expense",
      },
    ],

    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  { timestamps: true }
);

export default mongoose.models.Group ||
  mongoose.model("Group", GroupSchema, "groups");
