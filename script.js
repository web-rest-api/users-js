"use strict"
import { users } from "./js/users.js"

// function for writing on the DOM
function writeDom(user) {
	// select container
	const container = document.querySelector(".container")

	// create article using createElement()
	const article = document.createElement("article")
	// add class
	article.classList.add("card")

	// create car-image div
	const cardImageDiv = document.createElement("div")
	cardImageDiv.classList.add("card-image")

	// main image
	const mainImg = new Image()
	// add the image src attribute
	mainImg.src = user.gender === "Male" ? "./assets/02.jpg" : "./assets/01.jpg"
	// set alt attribute to the user.userName
	mainImg.setAttribute("alt", user.userName)
	// append the image to the div container
	cardImageDiv.appendChild(mainImg)

	//span to show the user.name
	const spanName = document.createElement("span")
	// add the class spanName to the span
	spanName.classList.add("card-title")
	// add the user.name as content
	spanName.textContent = user.userName
	// append span to the cardImageDiv
	cardImageDiv.appendChild(spanName)
	// append elements to the article
	article.appendChild(cardImageDiv)

	// card content div
	const cardContent = document.createElement("div")
	cardContent.classList.add("card-content")

	// ul with class list-group
	const ulList = document.createElement("ul")
	ulList.classList.add("list-group")

	// list of li's with each name

	// this works but with more code in it
	// Object.keys(user.address).forEach((key) => {
	// 	console.log(`${key}: ${user.address[key]}`)
	// })
	// Object.values(user.address).forEach((value) => {
	// 	const li = document.createElement("li")
	// 	li.classList.add("list-group-item")
	// 	li.textContent = value
	// 	// append each li to the ul
	// 	ulList.appendChild(li)
	// })
	for (let index = 0; index < 6; index++) {
		console.log("running")
	}
	cardContent.appendChild(ulList)
	// append the ul with all its li's to the container
	article.appendChild(cardContent)

	// append the article to the container
	container.appendChild(article)

	// 	container.innerHTML += `
	// 	<article class="card">
	// 		<div class="card-image">
	// 			<img src="./assets/${user.gender === "Male" ? "02.jpg" : "01.jpg"}" alt="${
	// 		user.userName
	// 	}" />
	// 			<span class="card-title">${user.userName}</span>
	// 		</div>

	// 		<div class="card-content">
	// 			<ul class="list-group">
	// 				<li class="list-group-item"><strong>Name:</strong>${user.userName}</li>
	// 				<li class="list-group-item"><strong>Age:</strong>${user.age}</li>
	// 				<li class="list-group-item">
	// 					<strong>Address:</strong> ${user.address.number} ${user.address.street}
	// 					<img class="list-group-img" src="./assets/${
	// 						user.address.house ? "house.svg" : "apart.svg"
	// 					}" alt="user's address" />
	// 				</li>
	// 				<li class="list-group-item">
	// 					<strong>Role:</strong> ${user.role}
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	</article>
	// `
}

users.forEach((user) => {
	writeDom(user)
})

/*
FOREACH
slower
easier to read / less code
callback function
users.forEach((user) => {
	console.log(user)
})
*/

/*
FOR
faster
more control
no callback function
for (let index = 0; index < users.length; index++) {
	const element = users[index]
	console.log(element)
}
*/

/*  FOR/OF  */
