---
order: 14
title: "Exercise: Making the Calculator Work with JavaScript"
path: "/calculator"
---

<style>
  .calc {
    display: inherit;
    margin: 20px auto;
  }
</style>

We are going to rebuild the calculator on iOS! Here it is:

<!-- ![Calculator build in HTML and CSS](./images/calculator.png) -->

<iframe class="calc" width="400" height="595" title="Calculator" src="./calculator.html" frameborder="no" allowtransparency="true"></iframe>

My implementation of it is embedded here on the page so feel free to play with it.

## Let's go over the requirements:

- The calculator should work like it does above
- The calculator should function like a normal calculator
- **Do not** implement `%` or `.`. You can assume everything will be an integer.
- `C` means clear. When a user clicks it, it should clear everything and go back to the first state it was in when the page loaded.
- Doing the back arrow is extra credit. It's like pressing backspace; it'll delete the last character typed. If it's clicked when there's only one digit, it sets the current number to be `0`.
- Don't worry about if the number is too long for the screen.
- Calculators tend to have some special behavior when you hit equals: if you type another number it erases the results and starts over. Feel free to do that but also free free (like me) to just treat it normally and make the user hit `C` if they want to clear it. Let's keep it simple.

Okay, now that you have requirements, let's go over some tips and hints.

## JavaScript Tips and Hints

- Again, no wrong way to do this. I wrote about 80 lines of JavaScript to finish the project (not including empty lines.) I say that so you have an idea of how much code you should be writing. If you're writing 200+ lines of code, you may want to rethink some of your solutions. Don't feel like you're going for the smallest possible answer. You're just going for correct.
- I use `console.log` everywhere while I'm writing code. Just remember to take them out at the end.
- Many small functions is _very_ preferable to one large function. Have each function do one thing well as opposed to having giant functions that do everything. If you find a function doing too, break it into smaller pieces. I solved it with eight different functions.
- You'll need to keep track of several variables. Make sure these variables are stored in a place where they stay in scope.
- You can add an event listener to each button individually, or you can use one listener at the root of the button. I did the latter but it's up to you.

## Types

A brief note on what called **types** in JavaScript. We've danced the idea already and I want to make it a little more concrete for you. Strings, booleans, objects, arrays, numbers, these are different types of types (lol). JavaScript is a language where you don't have to concern yourself _a lot_ with types since it doesn't strictly enforce them (other languages do) but in this problem you are definitely going to have to deal with it.

Whatever you put into the DOM and whatever you get out it are going to strings, every time. If I do:

<div class="number-target"></div>

```javascript
const num = 10;
const div = document.querySelector(".number-target"); // the div right above this block
console.log(num, typeof num); // this is a number here
div.innerText = num;
console.log(div.innerText, typeof div.innerText); // it's a string here
```

Since you're doing math here, you'll need the numbers to actually be of the number type. Otherwise you'll get `"5" + "5" = "55"`. There's a function called `parseInt(string)` that will turn a string of a number (`"5"`) to a number (`5`).

You'll also see that we used the `typeof` operator. `typeof` tells whatever the type of the thing that comes right after it is. This is useful to quickly see what's happening in your code. Be careful because `typeof` is not always useful, but it is useful for telling numbers and strings apart.

## Starting HTML & CSS

You can copy and paste the HTML & CSS to start with locally, or use our [calculcator starter CodePen][calcstarter] to focus on writing the JavaScript.

- [The HTML][html] (you can view source on it)
- [The CSS][css]

**Now go code the JavaScript to make the calculator work!**

### Answer: [The JavaScript][js]

[html]: https://github.com/FrontendMasters/bootcamp/blob/master/static/calculator.html
[css]: https://github.com/FrontendMasters/bootcamp/blob/master/static/calculator.css
[js]: https://github.com/FrontendMasters/bootcamp/blob/master/static/calculator.js
[calcstarter]: https://codepen.io/frontendmasters/pen/wQMgWR
