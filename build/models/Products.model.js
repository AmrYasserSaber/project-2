"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../database"));
var uuid_1 = require("uuid");
var ProductModel = /** @class */ (function () {
    function ProductModel() {
    }
    ProductModel.prototype.getAllProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connect, SQLOrder, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        SQLOrder = "SELECT id,name,price FROM Products";
                        return [4 /*yield*/, connect.query(SQLOrder)];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("couldn't return Products ".concat(error_1.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.create = function (Product) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, SQLOrder, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        SQLOrder = "INSERT INTO Products (id,name,price)\n            values ($1,$2,$3) returning id,name,price";
                        if (Product.id) {
                            throw new Error("please don't enter any id");
                        }
                        Product.id = (0, uuid_1.v1)();
                        return [4 /*yield*/, connect.query(SQLOrder, [
                                Product.id,
                                Product.name,
                                Product.price
                            ])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error('Unable to create Product ' +
                            Product.name +
                            ':' +
                            error_2.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.updateProduct = function (Product) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, SQLOrder, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        SQLOrder = "UPDATE Products SET name=$2,price=$3 WHERE id=$1  RETURNING id,name,price";
                        return [4 /*yield*/, connect.query(SQLOrder, [
                                Product.id,
                                Product.name,
                                Product.price
                            ])];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("couldn't find Product ".concat(error_3.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.deleteProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, SQLOrder, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        SQLOrder = "DELETE FROM Products WHERE id='".concat(id, "' RETURNING id,name,price");
                        return [4 /*yield*/, connect.query(SQLOrder)];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error("couldn't delete Product ".concat(error_4.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.ChooseProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connect, SQLOrder, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connect = _a.sent();
                        SQLOrder = "SELECT id,name,price FROM Products WHERE id='".concat(id, "'");
                        return [4 /*yield*/, connect.query(SQLOrder)];
                    case 2:
                        result = _a.sent();
                        connect.release();
                        return [2 /*return*/, result.rows[0]];
                    case 3:
                        error_5 = _a.sent();
                        throw new Error("couldn't find Product ".concat(error_5.message));
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductModel;
}());
exports.default = ProductModel;
