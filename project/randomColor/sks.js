/** @format */
//how for each user in event lister
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const btn = document.querySelector(".btn");

buttons.forEach((button) => {
     button.addEventListener("click", (e) => {
          //   if (e.target.id === "grey") {
          //        body.style.backgroundColor = "grey";
          //   } else if (e.target.id === "white") {
          //        body.style.backgroundColor = "white";
          //   } else if (e.target.id === "blue") {
          //        body.style.backgroundColor = "blue";
          //   } else if (e.target.id === "yellow") {
          //        body.style.backgroundColor = "yellow";
          //   }

          switch (e.target.id) {
               case "grey":
                    body.style.backgroundColor = "grey";
                    break;

               case "white":
                    body.style.backgroundColor = "white";
                    break;

               case "blue":
                    body.style.backgroundColor = "blue";
                    break;

               case "yellow":
                    body.style.backgroundColor = "yellow";
                    break;

               default:
                    alert("No click event occurs");
                    break;
          }
     });
});

btn.addEventListener("click", (event) => {
     //  const random = Math.round(Math.random() * 1000 + 1);
     //  const random2 = Math.round(Math.random() * 1000 + 1);
     //  const random3 = Math.round(Math.random() * 1000 + 1);
     const random = Math.floor(Math.random() * 16777215).toString(16);
     body.style.backgroundColor = `#${random}`;
});
