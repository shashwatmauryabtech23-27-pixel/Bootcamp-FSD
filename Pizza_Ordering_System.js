// ===============================
// JavaScript Pizza Billing System
// ===============================

let prompt = require("prompt-sync")();
let pizzaSize = prompt("What size of pizza do you want?\nSmall (S), Medium (M), or Large (L):").toUpperCase();

let sizeName = "";
let basePrice = 0;

// Pizza Size Selection
switch (pizzaSize) {
    case "S":
        sizeName = "Small";
        basePrice = 150;
        break;

    case "M":
        sizeName = "Medium";
        basePrice = 200;
        break;

    case "L":
        sizeName = "Large";
        basePrice = 250;
        break;

    default:
        console.log("❌ Invalid Pizza Size!");
        alert("Invalid Pizza Size! Please Refresh and Try Again.");
        throw new Error("Invalid Pizza Size");
}

// Add-on Prices
const cheesePrice = 30;
const tomatoPrice = 30;
const capsicumPrice = 30;
const cornPrice = 20;
const onionPrice = 20;

// User Inputs
let cheese = prompt("Do you want Extra Cheese? (₹30) [Y/N]").toUpperCase();
let tomato = prompt("Do you want Extra Tomato? (₹30) [Y/N]").toUpperCase();
let capsicum = prompt("Do you want Extra Capsicum? (₹30) [Y/N]").toUpperCase();
let corn = prompt("Do you want Extra Corn? (₹20) [Y/N]").toUpperCase();
let onion = prompt("Do you want Extra Onion? (₹20) [Y/N]").toUpperCase();

let total = basePrice;

// Cheese
let cheeseText = "No";
if (cheese === "Y") {
    total += cheesePrice;
    cheeseText = "Yes (+₹30)";
}

// Tomato
let tomatoText = "No";
if (tomato === "Y") {
    total += tomatoPrice;
    tomatoText = "Yes (+₹30)";
}

// Capsicum
let capsicumText = "No";
if (capsicum === "Y") {
    total += capsicumPrice;
    capsicumText = "Yes (+₹30)";
}

// Corn
let cornText = "No";
if (corn === "Y") {
    total += cornPrice;
    cornText = "Yes (+₹20)";
}

// Onion
let onionText = "No";
if (onion === "Y") {
    total += onionPrice;
    onionText = "Yes (+₹20)";
}

// Discount (10%)
let discount = 0;

if (
    cheese === "Y" &&
    tomato === "Y" &&
    capsicum === "Y" &&
    corn === "Y" &&
    onion === "Y"
) {
    discount = total * 0.10;
    total = total - discount;
}

// GST (18%)
let gst = total * 0.18;
let finalBill = total + gst;

// Bill Output
console.log("================================");
console.log("        PIZZA BILL");
console.log("================================");

console.log("Pizza Size       : " + sizeName);
console.log("Base Price       : ₹" + basePrice);

console.log("Extra Cheese     : " + cheeseText);
console.log("Extra Tomato     : " + tomatoText);
console.log("Extra Capsicum   : " + capsicumText);
console.log("Extra Corn       : " + cornText);
console.log("Extra Onion      : " + onionText);

console.log("--------------------------------");

console.log("Subtotal         : ₹" + (basePrice +
    (cheese === "Y" ? cheesePrice : 0) +
    (tomato === "Y" ? tomatoPrice : 0) +
    (capsicum === "Y" ? capsicumPrice : 0) +
    (corn === "Y" ? cornPrice : 0) +
    (onion === "Y" ? onionPrice : 0)));

console.log("Discount         : ₹" + discount.toFixed(2));
console.log("GST (18%)        : ₹" + gst.toFixed(2));
console.log("--------------------------------");
console.log("Final Bill       : ₹" + finalBill.toFixed(2));

console.log("================================");
console.log("🍕 Thank You for Ordering!");
console.log("Visit Again 😊");

// alert(
// `========= PIZZA BILL =========

// Pizza Size : ${sizeName}
// Base Price : ₹${basePrice}

// Extra Cheese : ${cheeseText}
// Extra Tomato : ${tomatoText}
// Extra Capsicum : ${capsicumText}
// Extra Corn : ${cornText}
// Extra Onion : ${onionText}

// Discount : ₹${discount.toFixed(2)}
// GST (18%) : ₹${gst.toFixed(2)}

// -----------------------------
// Final Bill : ₹${finalBill.toFixed(2)}

// 🍕 Thank You for Ordering!`
// );