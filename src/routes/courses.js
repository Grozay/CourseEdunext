const express = require("express");
const router = express.Router();
const CourseController = require("../app/Controllers/CourseController");

router.post("/store", CourseController.store);
router.get("/create", CourseController.create);
router.get("/:id/edit", CourseController.edit);
router.put("/:id", CourseController.update);
router.get("/:slug", CourseController.show);
router.delete("/delete/:id", CourseController.destroy);

module.exports = router;
