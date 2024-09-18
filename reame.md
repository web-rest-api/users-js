# Simple solution

In this solution we use a `forEach` loop with a callback function that executes a function called `writeDom`
This function takes a parameter called `user`. This is an object with all the information for each user
Each object looks like this:

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

Then we display the data on the DOM

## WARNING !

This is ok for a simple variable that lives in our script.js. However it's not the best practice due to security issues that the innerHTML may allow user to exploit.
To avoid that, I'll create a new branch in which we populate the DOM in a more programatic way using `document.createElement()`
