"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
exports.UserSchema.pre('save', async function (next) {
    let user = this;
    if (!user.isModified('password'))
        return next();
    try {
        user.password = await bcrypt.hash(user.password, 10);
        return next();
    }
    catch (e) {
        return next(e);
    }
});
//# sourceMappingURL=user.schema.js.map