const Course = require("../../app/models/Course");

class SiteController {
  // home
  async index(req, res) {
    await Course.find({})
      .then((courses) => {
        res.render("home", {
          courses
        });
      })
      .catch(
        (err) => res.status(404).render("not-found", { err })
      );
  }
}

module.exports = new SiteController();
