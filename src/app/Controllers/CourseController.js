const Course = require('../models/Course')


class CourseController {
    // [GET] /courses/slug
    async show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render("course/detail", { course })
            )
            .catch(
                (err) => res.status(404).render("not-found", { err })
            );
    }
    // [GET] /courses/create
    async create(req, res) {
        res.render('course/create')
    }

    // [POST] /courses/store
    async store(req, res) {
        try {
            const formData = req.body;
            formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
            const course = new Course(formData);
            await course.save();
            res.redirect("/");
        } catch (error) {
            console.error("Error saving course:", error);
            // res.status(500).send("An error occurred while saving the course");
        }
    }

    // [GET] /courses/:id/edit
    async edit(req, res) {
        await Course.findById(req.params.id)
            .then((course) =>
                res.render("course/edit", { course })
            )
            .catch(
                (err) => res.status(404).render("not-found", { err })
            );
    }
    // [PUT] /courses/:id/
    async update(req, res) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        await Course.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect("/me/stored/courses"))
            .catch(
                (err) => res.status(404).render("not-found", { err })
            );
    }

    // [DELETE] /courses/delete/:id
    async destroy(req, res) {
        await Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("/me/stored/courses"))
            .catch(
                (err) => res.status(404).render("not-found", { err })
            );
    }
}

module.exports = new CourseController();
