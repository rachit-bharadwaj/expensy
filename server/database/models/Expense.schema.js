import mongoose, { Schema } from "mongoose";

const ExpenseSchema = new Schema(
  {
    dateTime: {
      type: Date,
      required: true,
    },

    modeOfPayment: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["Personal", "Group"],
      default: "Personal",
    },

    items: [
      {
        name: {
          type: String,
          required: true,
        },
        cost: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        consumers: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            type: String,
          },
        ],
      },
    ],
  },

  { timestamps: true }
);

export default mongoose.models.Expense ||
  mongoose.model("Expense", ExpenseSchema, "expenses");
