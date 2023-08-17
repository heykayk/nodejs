const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    app.use('/khoa-hoc', courseRouter);

    app.use('/', siteRouter);
}

module.exports = route;
