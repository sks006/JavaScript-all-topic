/** @format */

// Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.
const card_img = document.querySelector(".card-img-top");

const requestURL = "https://api.github.com/users/hiteshchoudhary";

const xhr = new XMLHttpRequest();

xhr.open("GET", requestURL);
xhr.onreadystatechange = function () {
     //console.log(xhr.readyState);

     const data = JSON.parse(this.responseText);
     console.log(data);
     const imgLink = data.avatar_url;
     card_img.src = imgLink;

     // TODO checking http request state
     //  if (xhr.readyState === 4) {
     //       console.log(this.responseText);
     //  }
};
xhr.send();
