const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const mongo = require('../util/mongo');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        image: { type: String, maxleng: 1000 },
        description: { type: String, maxLength: 600 },
        videoId: { type: String, require: true },
        slug: { type: String, slug: 'name' },
        deletedAt: { type: Date },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAd: true,
});

module.exports = mongoose.model('Course', Course);
