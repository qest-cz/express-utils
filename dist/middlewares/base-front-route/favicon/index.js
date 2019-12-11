"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpCodes = __importStar(require("http-codes"));
exports.getFavicon = (req, res, next) => {
    try {
        res.status(httpCodes.NO_CONTENT).send();
    }
    catch (e) {
        next(e);
    }
};
//# sourceMappingURL=index.js.map