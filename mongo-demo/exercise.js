const mongoose = require("mongoose");

//connection
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected Successfully"))
  .catch((err) => console.log("Error", err));

//   Schema - to define a shape of the data
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
  tags: [String],
  date: { type: Date, default: Date.now },
});

// model
const Course = mongoose.model("Course", courseSchema);

// get all published backend courses
async function getAllPublisedBackendCourses() {
  const courses = await Course.find({ isPublished: true, tags: "backend" })
    .sort({ name: 1 })
    .select({ name: 1, author: 1, _id: 0 });
  console.log(courses);
}

