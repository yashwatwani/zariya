"use strict";
// src/utils/shiprocket.ts
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShiprocketOrder = createShiprocketOrder;
var SHIPROCKET_EMAIL = process.env.NEXT_PUBLIC_SHIPROCKET_EMAIL || 'YOUR_API_USER_EMAIL';
var SHIPROCKET_PASSWORD = process.env.NEXT_PUBLIC_SHIPROCKET_PASSWORD || 'YOUR_API_USER_PASSWORD';
var cachedToken = null;
var tokenExpiry = null;
function getShiprocketToken() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Use cached token if not expired
                    if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
                        return [2 /*return*/, cachedToken];
                    }
                    return [4 /*yield*/, fetch('https://apiv2.shiprocket.in/v1/external/auth/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                email: SHIPROCKET_EMAIL,
                                password: SHIPROCKET_PASSWORD,
                            }),
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (!data.token)
                        throw new Error('Shiprocket authentication failed');
                    cachedToken = data.token;
                    // Shiprocket tokens are valid for 10 minutes, so set expiry a bit earlier
                    tokenExpiry = Date.now() + 8 * 60 * 1000;
                    return [2 /*return*/, cachedToken];
            }
        });
    });
}
function createShiprocketOrder(orderPayload) {
    return __awaiter(this, void 0, void 0, function () {
        var token, res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getShiprocketToken()];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, fetch('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': "Bearer ".concat(token),
                            },
                            body: JSON.stringify(orderPayload),
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _a.sent();
                    if (!res.ok) {
                        throw new Error(data.message || 'Failed to create Shiprocket order');
                    }
                    return [2 /*return*/, data];
            }
        });
    });
}
