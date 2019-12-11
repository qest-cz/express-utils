"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.rateLimiter = (settings) => {
    if (!settings.enabled) {
        return (req, res, next) => next();
    }
    const { max, windowMs } = settings;
    return new express_rate_limit_1.default({ windowMs, max });
};
//# sourceMappingURL=index.js.map