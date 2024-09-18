"use strict"
import { users } from "./js/users.js"

// function for writing on the DOM
function writeDom(user) {
	// select container
	const container = document.querySelector(".container")

	// create article using createElement()
	const article = document.createElement("article")

	console.log(article)

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
