---
order: 2
title: "HTML"
path: "/html"
---

## Terminology

- HTML

- Tag

- Browser display of HTML

- \<!DOCTYPE\>

- Head and body

- Element

- Attribute

### Paragraph `<p></p>`

```html
<p>This is a paragraph of information.</p>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p

### Headings `<h1></h1><h2></h2> ... <h6></h6>`

```html
<h1>My Fine Website</h1>

<h2>An Article Title</h2>

<h3>A Subhead Within the Article</h3>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements

### Unordered list `<ul></ul>`

Unordered list (often called a "bullet list" - but remember, there's no formatting in HTML!)

Used for lists where the items have no critical order of execution

_Always_ contains `<li>` tags!

```html
<ul>
   <li>Something</li>
   <li>Another thing</li>
   <li>Also this one</li>
</ul>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul

### List item `<li></li>`

_Always_ nested inside a `<ul>` or `<ol>` tag!

```html
<ul>
   <li>Something</li>
   <li>Another thing</li>
   <li>Also this one</li>
</ul>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li

### Ordered list `<ol></ol>`

Used for lists where the order is important (like a list of instructions). Often called a "number list" - but remember there's no formatting in HTML!

_Always_ contains `<li>` tags!

```html
<ol>
   <li>Something</li>
   <li>Another thing</li>
   <li>Also this one</li>
</ol>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol

### Line break `<br>`

Used where breaks in lines are critical: Poem, address, etc.

```html
<p>Line of poem<br>
Another line of the poem</p>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br

### Quotation block `<blockquote></blockquote>`

Used for longer quotations.

```html
<blockquote>
   <p> Video conferencing bears a terrifying promise: Distance will no longer be an excuse for not attending meetings.</p>
   <cite>Steve Steinberg, 1994</cite>
</blockquote>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote

### Citation element `<cite></cite>`

Used for citing a creative work.

```html
<blockquote>
   <p> Video conferencing bears a terrifying promise: Distance will no longer be an excuse for not attending meetings.</p>
   <cite>Steve Steinberg, 1994</cite>
</blockquote>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite

### Links and anchors `<a></a>`

Links can go anywhere: to pages on your site, to pages on other sites, or to files (like a PDF).

```html
<a href="http://www.google.com">Go to Google</a>
```

Anchors are useful for navigating within a single web page. You need to code an anchor and a link pointing to the anchor to make this work. The anchor is placed where you want the user to start reading. The link is placed where you wish the user to click to skip to that anchor. "Back to top" links are a typical example.

Anchor: `<a id="top"></a>`

Link to an anchor: `<a href="#top">Back to top</a>`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a

### Image `<img>`

Displays an image on your page. Image formats include JPG, GIF, PNG. You may see SVG elements as well. The src (source) attribute is required. Also consider adding an alt attribute.

JPG, GIF, PNG = raster images (a bunch of pixels)

SVG = vector image (a mathematical equation)

src = image source (a file path to the image)

alt = alternative text. Displays if the image does not. Read by search engines and screen readers. It should fully describe the image, so you could imagine what the image looked like if you could not see it.

```html
<img src="http://placepuppy.net/300/300" alt="A puppy.">
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img

### Strong importance `<strong></strong>`

An item is strongly important relative to surrounding text. Text is generally rendered bold, but this is not a reason to use this tag.

```html
<p>Putting your hand on a hot stove <strong>will get you burned</strong>. Don't do it!</p>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong

### Emphasized text `<em></em>`

An item is emphasized relative to surrounding text. Text is generally rendered in italics, but this is not a reason to use this tag.

```html
<p>You simply <em>must</em> try this new coffee shop!</p>
```

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em

### What is the difference between `<strong>` and `<em>` ?

> While \<em\> is used to change the meaning of a sentence as spoken
> emphasis does (\"I *love* carrots\" vs. \"I
> love *carrots*\"), \<strong\> is used to give portions of a sentence
> added importance (e.g., \"**Warning!** This is **very dangerous.**\")
> Both \<strong\> and \<em\> can be nested to increase the relative
> degree of importance or stress emphasis, respectively.

Explanation taken from: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong

## References

**HTML Elements Reference**

https://developer.mozilla.org/en-US/docs/Web/HTML/Element

**InternetingIsHard.com**

- Introduction
  https://internetingishard.com/html-and-css/introduction/

- Basic Web Pages
  https://internetingishard.com/html-and-css/basic-web-pages/

- Links and Images
  https://internetingishard.com/html-and-css/links-and-images/

- Semantic HTML
  https://internetingishard.com/html-and-css/semantic-html/

**Validating HTML**

http://validator.w3.org/

## Exercises

### Waaaa, it "doesn't work"!!!

Remember to use the HTML validator if things are looking odd in the browser, or if the colors in the editor seem off. That's an indicator that you've made some errors along the way. The validator is great for catching errors pertaining to syntax, tag spelling, tag nesting, and applying the right attributes to a given tag.

http://validator.w3.org/

### Mark up a book chapter

Go to this page: https://github.com/FrontendMasters/bootcamp/blob/master/static/exercises/1-html/book%20excerpt.txt

Copy out the text that is posted there. This is the first chapter of a book published in 1922 and which is now out of copyright.

Reformat this document in HTML, marking up anything you think relevant, based on the tags you learned. Note that in some places, I\'ve called for emphasis, while there\'s a link in another place.

## Additional HTML practice

If you finish early, and/or you want some more practice, work through the following sections of exercises at W3Schools:

https://www.w3schools.com/html/exercise.asp

- HTML Attributes exercises 2-5

- HTML Headings, all exercises

- HTML Paragraphs, exercises 1-3

- HTML Comments, all exercises

- HTML Links, exercises 1-3, 5

- HTML Images, exercises 1, 3, 5, 6

- HTML Lists, exercises 1-2

### On Your Own

Once you've finished the above work, start creating an "about" page that's all about you. In this page, include the following:

- A paragraph of information about who you are, where you live, and what you currently do for work

- Another paragraph describing what you'd like to do in web design and development

- Make a list of three important things to know about you

- Include a favorite quote, with citation for the person who said it

- Include at least one picture of yourself

- Link to a website that you like to visit frequently

If you still need more to do, make a page about some of your hobbies and
activities. Include:

- What is this hobby exactly?

- How does it make you feel?

- Where have you traveled because of your hobby? What other life experiences has your hobby provided, that you might not otherwise
  experience?

- Photos and/or videos of your hobby in action

- Links to websites describing your hobby, or where hobbyists discuss what they do

If you manage to get as far as creating both web pages, link them together with a navigation bar.

As always, do not be concerned with how these pages look. They are Ugly Web Pages&trade;! Be sure to use the right HTML tags to communicate what the content is about, not what you think is pretty.
