const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: { type: Boolean, default: false },
    subTask:String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
