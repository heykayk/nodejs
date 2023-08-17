const { default: mongoose } = require('mongoose');

module.exports = {
    mutipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongooseObject) {
        return mongooseObject ? mongooseObject.toObject() : mongooseObject;
    },
};
