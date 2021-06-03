"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works !'
    });
});
module.exports = app;
//# sourceMappingURL=app.js.map