---
order: 5
title: "Forms"
path: "/forms"
---

## Forms, Web Fonts, and More

### Together in class

We will spend lots of time discussing forms today. We'll create a form in class that will submit to a server and emails you the results of what was typed in the form.

We will also look at web fonts, a way of expanding your type choices for your website.

Finally, we'll look at additional functionality to include in your web pages, like YouTube videos, Facebook or Twitter feeds, Google maps, and so forth.

### `<form></form>`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

The `form` element surrounds your entire form. Required!

```html
<form action="index.php" method="post">

... (lots of tags) ...

</form>
```

Standard attributes include `method` and `action`.

`Method` values: `get`, `post`. Has to do with how information is submitted to the server. Your web developer will tell you which method to use.

`Action` value: given to you by your web developer.

### `<input type="text">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)

Simple text entry field. Useful for collecting generic text (think name, address, short answers)

```html
<form action="index.php" method="post">

<label for="mytext">
    Enter something here:
</label>
<input type="text" id="mytext">

</form>
```

### `<input type="tel">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)

Phone number field.

Doesn't look different from the text field on a desktop, but on most mobile devices, it will display a number keyboard.

```html
<form action="index.php" method="post">

<label for="mytel">
Phone number:</label>
<input type="tel" id="mytel">

</form>
```

### `<input type="email">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)

Email field.

Doesn't look different from the text field on a desktop, but on most mobile devices, will display a keyboard with an easily accessible @ symbol, and sometimes additional keys (like a .com key).

```html
<form action="index.php" method="post">

<label for="myemail">
Email address:</label>
<input type="email" id="myemail">

</form>
```

### `<input type="date">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

Useful for date entry.

WARNING: Not well supported across browsers

WARNING 2: Date entry field may look VERY different on different devices.

Many people are still using JavaScript solutions for entering dates for these reasons.

```html
<form action="index.php" method="post">

<label for="mydate">
Pick a date:</label>
<input type="date" id="mydate">

</form>
```

### `<input type="number">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)

Number entry. Can go positive and negative. Does not error-check for numbers, though, if they are outside of a specified range. May change the mobile keyboard to numbers.

Attributes:

- `min` — set a minimum value
- `max` — set a maximum value

```html
<form action="index.php" method="post">

<label for="myqty">
How many do you want:</label>
<input type="number" id="myqty" min="1" max="10">

</form>
```

### `<input type="radio">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)

Radio buttons — suitable for a single choice among a few options. There should be at least two choices.

Attributes:

- `name` — always the same for ALL radio buttons in a group — identifies the choices for a single response
- `value` — unique for each radio button — what is this choice?
- `checked` — start the form with this value pre-selected

```html
<form action="index.php" method="post">

<label>
  <input type="radio" name="myradio" value="choice1" checked> Choice 1
</label>
<label>
  <input type="radio" name="myradio" value="choice2"> Choice 2
</label>

</form>
```

### `<input type="checkbox">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

Checkboxes — suitable for several choices among a few options. There can be a single checkbox.

Attributes:

- `name` — optional, but explains what this checkbox is about (in addition to `ID`)
- `value` — unique value for each checkbox - what is this choice?
- `checked` — start the form with this item selected

```html
<form action="index.php" method="post">

<label>
  <input id="subscribe" type="checkbox" value="subscribe">Add me to your email list
</label>

</form>
```


### `<textarea></textarea>`

A large box for extended comments.

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

```html
<form action="index.php" method="post">

<label for="comments">Special requests:</label>
<textarea id="comments"></textarea>

</form>
```

### `<select></select>`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

Select dropdown — suitable for choosing a single option among many, many choices. Best used when the visitor knows what to expect.

Example: a list of states, a list of sizes, etc.

```html
<form action="index.php" method="post">

<label for="pietype">
What kind of pie would you like?</label>
<select id="pietype">
    <option value="apple">Apple</option>
    <option value="cherry">Cherry</option>
</select>

</form>
```

### `<label></label>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label

Associates a text label with a form field. Many examples of this given above.

Depending on application, may have a for attribute. The for attribute is set to the same value as the ID given to the form field.

See above examples.

## References

- Dive into HTML5 Forms [http://diveinto.html5doctor.com/forms.html](http://diveinto.html5doctor.com/forms.html)
- Form reference [https://htmlreference.io/forms/](https://htmlreference.io/forms/)
- Mozilla Developer Network: HTML forms tutorial [https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
- Tutorial: Your first HTML form [https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)
- InternetingIsHard.com
  - Forms [https://internetingishard.com/html-and-css/forms](https://internetingishard.com/html-and-css/forms)
  - Web Typography [https://internetingishard.com/html-and-css/web-typography/](https://internetingishard.com/html-and-css/web-typography/)
- Google Fonts [http://fonts.google.com](http://fonts.google.com)

## Exercises

### Catch up

Whew, we have done a LOT this week! If you want to spend time reviewing, making new pages, or working on exercises, this is a great time to do that.

### Plan your portfolio
Spend some time planning your portfolio. You will be creating this over the weekend and posting it to your GitHub site (which we will create tomorrow).

Consider reusing the about and contact pages we already created, and maybe the book chapter would make a good artifact to display.

What else would you want to include in your portfolio? What should go on the home page?

### Additional CSS practice

Work through the following sections of exercises at W3Schools (scroll to bottom of list): [https://www.w3schools.com/html/exercise.asp](https://www.w3schools.com/html/exercise.asp)

- HTML Forms, all exercises
- HTML Form Elements, exercises 1-2
- HTML Input Types, all exercises

### On Your Own

- Create a contact form for your website.
- Use similar styling to your about and hobby pages, and add the contact page.
- In the contact form, ask for name, email, phone number, and have a big area for typing a message. Don't forget a submit button! You may ask for other information if you wish.
- Include a map of your location on this page. (If you don't want to include your exact address, include a map of your city or your country.)
