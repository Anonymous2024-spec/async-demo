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

async function getCourses() {
  return await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .sort("-price")
    .select("name author price");
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
