"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./api/routes/products"));
const app = express_1.default();
app.use('/products', products_1.default);
module.exports = app;
//# sourceMappingURL=app.js.map