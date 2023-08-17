const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongo = require('../util/mongo');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        image: { type: String, maxleng: 1000 },
        description: { type: String, maxLength: 600 },
        videoId: { type: String, require: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
