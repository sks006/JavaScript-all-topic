// use full in react
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
//! BMI with switch case.
const BMI = (weight / ((height * height) / 10)).toFixed(2);
results.innerHTML = `<span>${BMI}</span>`;

if (BMI < 18.6) {
    weight_guide.innerHTML = `<span>Under Weight = Less than 18.6</span>`;
} else if (BMI >= 18.6 && BMI <= 24.9) {
    weight_guide.innerHTML = `<span>Normal Range = 18.6 and 24.9</span>`;
} else if (BMI > 24.9) {
    weight_guide.innerHTML = `<span>Overweight = Greater than 24.9</span>`;
}