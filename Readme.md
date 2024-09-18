# More secure and complex solution

In this solution we there is more separation of concerns, init function and write on dom
We use a more programatic approach to displaying data on the DOM `document.createElement()`
We also add attributes by using `classList.add()` and we use a lop for the li items:

```javascript
// list of li's with each name
for (let index = 0; index < 4; index++) {
	const li = document.createElement("li")
	li.classList.add("list-group-item")
	// evaluate the content
	if (index === 0) {
		li.textContent = `Name: ${user.userName} ${user.lastName}`
	} else if (index === 1) {
		li.textContent = `Age: ${user.age}`
	} else if (index === 2) {
		li.textContent = `Address:  ${user.address.number} ${user.address.street}`
		// add icon
		const iconImg = new Image()
		iconImg.src = user.address.house
			? "./assets/house.svg"
			: "./assets/apart.svg"
		li.appendChild(iconImg)
	} else {
		li.textContent = `Role: ${user.role}`
	}
	// append each li to the ul list-group
	ulList.appendChild(li)
}
```

We also add the content based on some conditionals that will display each of the user's data accordingly

The end result is the same but the program is more robust and secure

```javascript
{
    userName: "Leo",
    lastName: "Harris",
    age: 22,
    gender: "Male",
    address: {
        street: "Fir Lane",
        number: 10,
        house: true,
    },
    role: "Data Analyst",
}
```

Finally, we use `import` using Javascript ES6
