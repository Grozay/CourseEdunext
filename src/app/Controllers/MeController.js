const Course = require("../models/Course");

class MeController {
  // [GET] /me/stored/courses
  async storedCourses(req, res) {
    await Course.find({})
      .then((courses) => {
        res.render("me/stored-courses", {
          courses
        });
      })
      .catch(
        (err) => res.status(404).render("not-found", { err })
      );
  }
}

module.exports = new MeController();
