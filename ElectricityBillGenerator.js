console.log("*******************************************************************************************************")
console.log(`                              UTTAR PRADESH POWER CORPORATION LIMITED (UPPCL)                          `);
console.log(`                                      Bill of Supply for Electricity                                   `);
console.log(`Circle : Upwest                                Circle Code : 105              TollFreeNo. : 18001800440`);
console.log(`-------------------------------------------------------------------------------`)
let prompt = require("prompt-sync")();
let CustomerName = prompt("Customer Name: ");
let CustomerNumber = Number(prompt("Customer Number: "));
let OldMeterReading = Number(prompt("Old Meter Reading: "));
let CurrentMeterReading = Number(prompt("Current Meter Reading: "));
let TotalUnitsConsumed = CurrentMeterReading - OldMeterReading;
console.log(`Total Units Consumed: ${TotalUnitsConsumed} Units`);

console.log(`-------------------------------------------------------------------------------`)
let fixedRentalLine = 250;
console.log(`Fixed Rental Line: ${fixedRentalLine}`);
let TotalUnitsCharges;
if(TotalUnitsConsumed < 100){
    TotalUnitsCharges = TotalUnitsConsumed * 3.25 + fixedRentalLine;
}
else{
    TotalUnitsCharges = TotalUnitsConsumed * 4.75+ fixedRentalLine;
}


console.log(`Total Unit Charges:  ${TotalUnitsCharges}`);
let TotalTax = TotalUnitsCharges * (11.5/100);
console.log(`Total Tax (11.5%):  ${TotalTax}`);
console.log(`-------------------------------------------------------------------------------`)
let TotalBillAmountPayble = TotalUnitsCharges + TotalTax;
console.log(`Total Bill Amount Payble: ${TotalBillAmountPayble}`);
console.log(`-------------------------------------------------------------------------------`)