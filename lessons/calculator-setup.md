---
order: 7
title: "Calulator HTML Exercise"
path: "/calculator-html"
---

## Calculator Exercise

Our goal is to create a calculator that looks exactly like this image:

![](https://frontendmasters.github.io/bootcamp/exercises/5-github/calculator-spec.png)

## Exercise Files

Download the calculator exercise files, including the beginning state, ending state, instructions, and specification for how the calculator should look:

https://github.com/FrontendMasters/bootcamp/tree/master/static/exercises/5-github.zip

We are focusing this lesson on creating the HTML and CSS for the caclulator. In a future lesson we will make it interactive with JavaScript.

### A few Things To Know About This Calculator:

#### To Get Symbols for Math, You'll Need to Look Up Their HTML Codes

One place to do that is here:

[HTML Math Characters](https://www.toptal.com/designers/htmlarrows/math/)

[HTML Arrow Characters](https://www.toptal.com/designers/htmlarrows/arrows/)

#### The Calculator Buttons Should Be Clickable

You'll program them later in the course with JavaScript. But for right now, somehow we need to code clickable buttons.

#### Colors used in this design include:

- black: <span style="background:black;color:white;display:inline-block;padding:1px 5px;">#000000</span>
- white: <span style="background:white;display:inline-block;padding:1px 5px;">#ffffff</span>
- light grey: <span style="background:#d8d9db;display:inline-block;padding:1px 5px;">#d8d9db</span>
- buttons on hover: <span style="background:#ebebeb;display:inline-block;padding:1px 5px;">#ebebeb</span>
- button active state: <span style="background:#bbbcbe;display:inline-block;padding:1px 5px;">#bbbcbe</span>
- function buttons: <span style="background:#df974c;display:inline-block;padding:1px 5px;">#df974c</span>
- function buttons on hover: <span style="background:#dfb07e;display:inline-block;padding:1px 5px;">#dfb07e</span>
- function button active state: <span style="background:#dd8d37;display:inline-block;padding:1px 5px;">#dd8d37</span>

- The overall width of this calculator is 400px.

#### Suggested approach:

- Create a wrapper with a width of 400px to set up the calculator.
- Determine how many rows and columns we need.
- Identify elements that occupy more than one column.
- Determine the HTML tags required to code rows and cells.
- Code a single row of 4 elements to start with and see if you can get that working.
- Now add the other rows of 4 elements.
- Finally, add the rows where there are fewer than 4 elements. What do you need to adjust to get these to work?
- Once your layout is mostly working, add the colors and make it pretty.
