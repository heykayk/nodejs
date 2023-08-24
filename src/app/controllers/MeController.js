const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../util/mongo');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([Course.find(), Course.countWithDeleted({ deleted: true })])
            .then(([courses, countDelete]) => {
                res.render('me/stored-courses', {
                    countDelete,
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) => {
                res.render('me/trash', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
