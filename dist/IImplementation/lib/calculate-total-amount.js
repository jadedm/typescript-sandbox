"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotalAmount(order) {
    var total = order.calculateTotal();
    var discount = total * 0.1;
    total -= discount;
    var tax = total * 0.2;
    total += tax;
    return total;
}
exports.calculateTotalAmount = calculateTotalAmount;
