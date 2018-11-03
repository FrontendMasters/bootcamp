---
order: 5
title: "Forms"
path: "/forms"
---

## Forms, Web Fonts, and More

### Lesson Files

The files for this lesson are found at https://github.com/FrontendMasters/bootcamp/tree/master/static/exercises/4-forms

[Download ZIP of Files](https://github.com/FrontendMasters/bootcamp/blob/master/static/exercises/4-forms.zip)

### `<form></form>`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)

The `form` element surrounds your entire form. Required!

```html
<form action="index.php" method="post">

... (lots of tags) ...

</form>
```

Standard attributes include `method` and `action`.

`method` values: `get`, `post`. Has to do with how information is submitted to the server. Your web developer will tell you which method to use.

`action` value: given to you by your web developer.

### `<input type="text">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text)

Simple text entry field. Useful for collecting generic text (think name, address, short answers)

```html
<form action="index.php" method="post">

  <label for="mytext">Enter something here:</label>
  <input type="text" id="mytext">

</form>
```

### `<input type="tel">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel)

Phone number field.

Doesn't look different from the text field on a desktop, but on most mobile devices, it will display a number keyboard.

```html
<form action="index.php" method="post">

  <label for="mytel">Phone number:</label>
  <input type="tel" id="mytel">

</form>
```

### `<input type="email">`

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)

Email field.

Doesn't look different from the text field on a desktop, but on most mobile devices, will display a keyboard with an easily accessible @ symbol, and sometimes additional keys (like a .com key).

```html
<form action="index.php" method="post">

  <label for="myemail">Email address:</label>
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

  <label for="mydate">Pick a date:</label>
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

  <label for="myqty">How many do you want:</label>
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

  <label for="pietype">What kind of pie would you like?</label>
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

### `<input type="hidden">`

Hidden form fields are occasionally used with form processing scripts. They're an easy way to set a value important to the processing script, without editing the processing script itself.

Your processing script developer will tell you what to use for ID, name, and value.

Since hidden fields are not visible to the user, label tags are not required.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden

```html
<form action="index.php" method="post">

  <input type="hidden" id="myhidden" name="myhidden" value="myvalue">

</form>
```

## Adding processing to our form

Brent, our fabulous backend developer, has given us a form script we can use with the form we just built. He has told us that the action for the form is `https://e3vwdl4bpd.execute-api.us-west-2.amazonaws.com/default/API2SES` and we should use a method of `POST`.

We'll also need to configure a hidden input field. Brent says that the name should be `send_to` and the value should be the email address you used to register for Bootcamp.

Think about the right way to include this information in your form. Refer to the notes above for help.

## Adding error checking to our form

Lanie, our fabulous JavaScript developer, wrote a script for us to use for checking to make sure required fields are completed. It will also tell us that the form has successfully been submitted.

Lanie says to use the script that was given to you in your files. To add this script, she says to put it in the bottom of your web page. You'll need to add this code:

```html
<script src="js/forms.js"></script>
```

This will attach the form error checking JavaScript to your web page.

## Web Fonts

Web fonts are fonts that come from the web, rather than from the computer in front of you.

So far, we've called for fonts like this:

```html
<style>
  body {
     font-family: Arial, Helvetica, sans-serif;
  }
</style>
```

This asks for the Arial font first. If Arial (more common on PCs) isn't on the computer, then try for Helvetica (more common on Mac). If neither is available, then try the generic sans-serif font. That generic font is determined by your browser.

Wouldn't it be nice to have access to other fonts? That's where web fonts come in.

Web fonts may cost money, or they might be free. There are several places to get a web font, but two places in most common use include Google Fonts and FontAwesome.

Google Fonts https://fonts.google.com/ will let you pick your own fonts and assign them to your web page. Don't pick too many, though, or they will slow down the loading time of your web page -- very bad for mobile phone service especially!

FontAwesome Free https://fontawesome.com/free has over 1000 icons that are useful for web pages, including social media icons, arrows, credit cards, documents, and so much more.

Web fonts are included on your page in two steps. Both pieces of code should be provided by the font provider.

1. Link to the web font in the head of your HTML document. The font provider will give you the code to use, so the font is imported to your page.

2. In your CSS, call the correct `font-family` name, so the font will appear on your page.

For example, if you're using the Google font called Mali, you should include this code in the `<head>` of your document:

`<link href="https://fonts.googleapis.com/css?family=Mali" rel="stylesheet">`

When calling the font in CSS, it should be called this way:

```html
<style>
  h3.example-customfont {
    font-family: 'Mali', cursive;
  }
</style>

<h3 class="example-customfont">The quick brown fox jumped over the stump.</h3>
```

You will need to create your own selector for where you'd like the web font to appear.

## Embedding maps, videos, social media feeds, and more

YouTube, Twitter, Facebook, Google Maps... so many places to get such great content! You can embed this content into your HTML web page via the `<embed>` or `<iframe>` tag.

Any of these services will provide HTML code for you for what you want to share. Look for a link for sharing or embedding the information and copy the HTML. For example, this code will display a Google map of Minneapolis:

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90325.28539613367!2d-93.33151812543683!3d44.97079704339309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C+MN!5e0!3m2!1sen!2sus!4v1540581288890" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
```

## References

- Dive into HTML5 Forms [http://diveinto.html5doctor.com/forms.html](http://diveinto.html5doctor.com/forms.html)
- Form reference [https://htmlreference.io/forms/](https://htmlreference.io/forms/)
- Mozilla Developer Network HTML forms tutorial [https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms)
- Mozilla Developer Network Tutorial: Your first HTML form [https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)
- InternetingIsHard.com Forms [https://internetingishard.com/html-and-css/forms](https://internetingishard.com/html-and-css/forms)
- InternetingIsHard.com Web Typography [https://internetingishard.com/html-and-css/web-typography/](https://internetingishard.com/html-and-css/web-typography/)
- Google Fonts [http://fonts.google.com](http://fonts.google.com)

## Exercises

### Catch up

Whew, we have done a LOT this week! If you want to spend time reviewing, making new pages, or working on exercises, this is a great time to do that.

### Waaaa, it "doesn't work"!!!

Remember to use the HTML and CSS validators if things are looking odd in the browser, or if the colors in the editor seem off. That's an indicator that you've made some errors along the way. The HTML validator is great for catching errors pertaining to syntax, tag spelling, tag nesting, and applying the right attributes to a given tag. The CSS validator will find unclosed curly brackets, properties and values that don't exist, and more.

HTML validator: http://validator.w3.org/

CSS validator: http://jigsaw.w3.org/css-validator

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
