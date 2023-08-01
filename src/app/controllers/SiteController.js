const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../util/mongo')


class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find()
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
