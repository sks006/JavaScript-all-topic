/** @format */
//! if you write height out side the event listener then it will call immediately, and the height value=Empty.
//const height=parseInt(document.querySelector("#height").value)

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
     event.preventDefault();
     const height = parseInt(document.querySelector("#height").value);
     const weight = parseInt(document.querySelector("#weight").value);
     const weight_guide = document.getElementById("weight-guide");

     const results = document.querySelector("#results");
     if (height === "" || height < 0 || isNaN(height) || height > 100) {
          results.innerHTML = `${height} is not a valid height `;
     } else if (weight === "" || weight < 0 || isNaN(weight) || weight > 300) {
          results.innerHTML = `${weight} is not a valid weight `;
     } else {
          const BMI = (weight / ((height * height) / 10)).toFixed(2);
          results.innerHTML = `<span>${BMI}</span>`;
          switch (true) {
               case BMI < 18.6:
                    weight_guide.innerHTML = `<span>Under Weight = Less than 18.6</span>`;
                    weight_guide.style.color = "red";

                    break;
               case BMI >= 18.6 && BMI <= 24.9:
                    weight_guide.innerHTML = `<span>Normal Range = 18.6 and 24.9</span>`;
                    weight_guide.style.color = "green";
                    weight_guide.style.textAlign = "center";
                    break;
               case BMI > 24.9:
                    weight_guide.innerHTML = `<span>Overweight = Greater than 24.9</span>`;
                    weight_guide.style.color = "red";
                    break;
          }
     }
});
