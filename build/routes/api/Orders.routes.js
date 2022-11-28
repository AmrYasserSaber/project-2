"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers = __importStar(require("../../controllers/Orders.controllers"));
var authentication_middleware_1 = __importDefault(require("../../middleware/authentication.middleware"));
var routes = (0, express_1.Router)();
routes
    .route('/')
    .get(authentication_middleware_1.default, controllers.getAllOrders)
    .post(authentication_middleware_1.default, controllers.create);
routes
    .route('/:id')
    .get(authentication_middleware_1.default, controllers.ChooseOrder)
    .patch(authentication_middleware_1.default, controllers.updateOrder)
    .delete(authentication_middleware_1.default, controllers.deleteOrder);
exports.default = routes;
