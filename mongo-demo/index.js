const mongoose = require("mongoose");

// connect to a database
mongoose
  .connect("mongodb://localhost/plaground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB..", err));

//   schema
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// schema into a model - class
const Course = mongoose.model("Course", courseSchema);

// asynchronous function to add data
async function createCourse() {
  // then objects
  const course = new Course({
    name: "Angular Course",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  // save the data into the dtabase -
  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses = await Course
    // .find({ author: "Mosh", isPublished: true })
    // .find({price: {$gte: 10, $lte:20}})
    .find({ price: { $in: [10, 15, 20] } })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

// comparison operators
// eq, ne, gt, gte, lt, lte, in, nin(not in)
