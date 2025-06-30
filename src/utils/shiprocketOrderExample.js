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
exports.testCreateShiprocketOrder = testCreateShiprocketOrder;
var shiprocket_1 = require("./shiprocket");
// Example checkout form and cart data
var checkoutForm = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '9999999999',
    address: '221B Baker Street',
    city: 'Mumbai',
    state: 'Maharashtra',
    pin: '400001',
    country: 'India',
    paymentMethod: 'Prepaid', // or 'COD'
};
var cart = [
    { name: 'Gold Ring', sku: 'SKU123', qty: 1, price: 1500 },
    { name: 'Silver Chain', sku: 'SKU456', qty: 2, price: 800 },
];
function buildShiprocketOrderPayload(_a) {
    var checkoutForm = _a.checkoutForm, cart = _a.cart, orderId = _a.orderId, pickupLocation = _a.pickupLocation;
    return {
        order_id: orderId, // e.g., 'ORDER123'
        order_date: new Date().toISOString().slice(0, 10), // YYYY-MM-DD
        pickup_location: pickupLocation, // Must match Shiprocket dashboard
        billing_customer_name: checkoutForm.firstName,
        billing_last_name: checkoutForm.lastName,
        billing_address: checkoutForm.address,
        billing_city: checkoutForm.city,
        billing_pincode: checkoutForm.pin,
        billing_state: checkoutForm.state,
        billing_country: checkoutForm.country,
        billing_email: checkoutForm.email,
        billing_phone: checkoutForm.phone,
        shipping_is_billing: true,
        order_items: cart.map(function (item) { return ({
            name: item.name,
            sku: item.sku,
            units: item.qty,
            selling_price: item.price,
        }); }),
        payment_method: checkoutForm.paymentMethod,
        sub_total: cart.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0),
        length: 10, // Set your package dimensions
        breadth: 10,
        height: 10,
        weight: 0.5, // in kg
    };
}
// Example function to run and test order creation
function testCreateShiprocketOrder() {
    return __awaiter(this, void 0, void 0, function () {
        var orderId, pickupLocation, orderPayload, shiprocketOrder, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    orderId = 'ORDER' + Date.now();
                    pickupLocation = 'Zariya Mumbai';
                    orderPayload = buildShiprocketOrderPayload({
                        checkoutForm: checkoutForm,
                        cart: cart,
                        orderId: orderId,
                        pickupLocation: pickupLocation,
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, shiprocket_1.createShiprocketOrder)(orderPayload)];
                case 2:
                    shiprocketOrder = _a.sent();
                    console.log('Shiprocket order created:', shiprocketOrder);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error('Shiprocket order error:', err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
