const Course = require('../models/Course');
const { mongooseToObject } = require('../util/mongo');

class CourseController {
    //[GET] /

    // [GET] /khoa-hoc/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    // [GET] /khoa-hoc/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /khoa-hoc/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.image = `https://img.youtube.com/vi/${course.videoId}/sddefault.jpg`;
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new CourseController();
