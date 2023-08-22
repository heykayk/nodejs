const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/khoa-hoc', courseRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;
