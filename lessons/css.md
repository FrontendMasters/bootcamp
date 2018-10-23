---
order: 3
title: "CSS"
path: "/css"
---

## Terminology

**Property** (red) and **value** (blue)

<pre><code>p { <span style="color: red">font-weight:</span> <span style="color: blue">bold;</span> }
</code></pre>

**Declaration** (red)

A single property-value pair

<pre><code>p { <span style="color: red">font-weight: bold;</span> }
</code></pre>

**Selector** – shown in red **Declaration block** – shown in blue

Includes ALL of the individual declarations

<pre><code><span style="color: red">p</span> <span style="color: blue">{ font-weight: bold;
    font-family: Arial, sans-serif; }</span>
</code></pre>

## Ways to include CSS in your document

**External stylesheet** : attach a separate document in the `<head>` of your HTML.

```
<link href="css/styles.css" rel="stylesheet" />
```

**Internal stylesheet** or **embedded stylesheet** : Include styles in the `<style>` tag in the `<head>` of your HTML

```
<style>
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
```

**Inline styles** : occur in the HTML tag itself

```html
<p style="color: purple;">I am a purple paragraph!</p>
```

## Which should you use?

99.999% of the time: External stylesheet

It is rare that you will need inline or embedded/internal styles, but you should know they are possible.

## CSS Selectors

We will cover four simple ways to include CSS in your document:

- Elements: HTML tags as selectors
- Classes
- IDs
- Descendant selector

### Element selectors

Simply list the HTML tag and how you&#39;d like it styled.

```
body {
    font-family: Arial, Helvetica, sans-serif;
}
```

### Class selectors `.classname`

Create a class and attach it to an HTML tag to make the class appear.

- You may have more than one class per tag.
- You may use a class several times in a document.
- Classes are more specific than HTML elements and will generally override them.

```html
<style>
.warning {
    color: orange;
    font-weight: bold;
}
</style>

<p class="warning">This paragraph displays a warning!</p>
```

### ID selectors `#idname`

Create an ID and attach it to an HTML tag to make the styling appear.

- You may use the ID only once per page.
- Each element may have only one ID.
- IDs are the most specific, overriding styles from elements and classes.
- IDs are not commonly used in CSS these days. They are more commonly used with JavaScript.

```html
<style>
#danger {
    color: red;
    font-weight: bold;
    text-transform: uppercase;
}
</style>

<p id="danger">This text is uppercase, bold, and red, and you better pay attention because you're in danger only once on this web page!</p>
```

### Descendant selectors `.classname element {}`

This is a combination of one or more classes, IDs, or elements, separated by spaces, to indicate a family relationship.

```html
<style>
.warning p {
    color: violet;
}
</style>

<article class="warning">
    <p>All paragraphs in this article will have a color of violet.</p>
    <p>This paragraph too! No more classes needed!</p>
</article>
```

## Grouping selectors

Make all `h1` AND `h2` red:

```html
<style>
h4, h5 { color: green; }
</style>

<h4>I'm Green</h4>
<h5>I'm Green Too!</h5>
```

Make only the `h4`'s in `<section>` blue:

```html
<style>
section h6 { color: blue; }
</style>

<section>
    <h6>I'm blue!!</h6>
</section>
<h6>I'm NOT blue</h6>
```

Make the `h4`'s and `h5`'s inside `<section>` pink:

```html
<style>
section h4, section h5 { color: pink; }
</style>

<section>
    <h4>I'm pink!!</h4>
    <h5>I'm pink too</h5>
</section>
<h4>I'm NOT pink</h4>
```

For easier reading, you may wish to write selectors on seperate lines:

```
section h4,
section h5 {
    color: pink;
}
```

## Common CSS properties and values

### font-family

<table>
<tr>
<th>
 Property name
 </th>
 <th>
 Possible values                                                          </th>
 </tr>
   <tr>
      <td valign="top"><p></p>
      </td>
      <td><p>Establishes the font family/families. Standard choices include:</p>
        <ul>
          <li><strong>Sans-serif</strong>: Arial, Helvetica, Trebuchet MS, Verdana</li>
          <li><strong>Serif</strong>: Times, Times New Roman, Georgia</li>
          <li><strong>Monospace</strong>: Courier</li>
        </ul>
        <p><code>font-family: Arial, Helvetica, sans-serif;</code></p>
        </td>
    </tr>
    <tr>
      <td valign="top"><p>font-size</p></td>
      <td><p>Default browser size is 16px = 1em = 1 rem</p>
        <p><code>font-size: 1rem;</code></p>
        </td>
    </tr>
    <tr>
      <td valign="top"><p>font-style</p>
      </td>
      <td><p>Should the font be italic?</p>
        <p><code>font-style: italic;</code></p>
        <p><code>font-style: normal;</code></p>
        </td>
    </tr>
    <tr>
      <td valign="top"><p>font-weight</p>
      </td>
      <td><p>Should the font be bold?</p>
        <p><code>font-weight: bold;</code></p>
        <p><code>font-weight: normal;</code></p>
        </td>
    </tr>
    <tr>
      <td valign="top"><p>font</p></td>
      <td><p>Shorthand for multiple font properties.</p>
        <p><code>font: italic bold 1rem/1.3rem  Arial, Helvetica, sans-serif;</code></p>
        <p>Font is Arial/Helvetica/sans-serif, italic, and bold, and 1rem in size, with 1.3rem line spacing.</p>
        </td>
    </tr>
    <tr>
      <td valign="top"><p>line-spacing</p></td>
      <td><p>Distance between lines.</p>
        <p><code>line-spacing: 1.3rem;</code></p>
        </td>
    </tr>
    <tr>
      <td valign="top"><p>color</p></td>
      <td><p>Text color.</p>
        <p><code>color: white;</code></p>
        </td>
    </tr>
   <tr>
      <td valign="top"><p>background</p>
        <p>background-color<br/>
        background-image<br/>
        background-position<br/>
        background-repeat</p>
        </td>
      <td><p>Dealing with background images and colors. Background property is shorthand for all of the other properties.</p>
        <p>By default, background images repeat.</p>
        <p><code>background-color: blue;</code></p>
        <p><code>background: red url(image.jpg) no-repeat left top;</code></p>
        <p>means a background color of red, background image of image.jpg, display it once at the left top corner, no repeat of the image.</p>
        <p>Image will display over the color. You may specify a color in case the image doesn't display.</p>
        </td>
    </tr>
    <tr>
      <td valign="top"><p>text-decoration</p></td>
      <td><p>Turns off the underline in links.</p>
        <p>Values include none, underline.</p>
        <p><code>text-decoration: none;</code></p>
   </td>
    </tr>
        <tr>
      <td valign="top"><p>:link<br/>
        :visited<br/>
        :focus<br/>
        :hover<br/>
        :active</p></td>
      <td><p>Pseudoclasses: specify styling in these states.</p>
        <ul>
          <li>:link -- unvisited link</li>
          <li>:visited -- visited state</li>
          <li>:focus -- the currently "focused" (selected) element </li>
          <li>:hover -- hover your mouse over this </li>
          <li>:active -- the time between the link is selected and the time the page loads. (Not used much today.)</li>
        </ul>
        <p>If you are using these pseudoclasses, they MUST go in the order listed.</p>
        <p>To remember:</p>
        <p><strong>L</strong>ord <strong>V</strong>ader <strong>F</strong>ormer <strong>H</strong>andle <strong>A</strong>nakin</p>
        <p>:link, :visited, :active are used almost exclusively on links (the <strong>A</strong> tag).</p>
        <p>The pseudoclasses :focus and :hover are used with links and with any other element on the page. :focus is especially useful with forms and in accessibility contexts.</p>
        </td>
    </tr>
 </table>

## References

**HTML Elements Reference**

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

**InternetingIsHard.com**

- Hello CSS [https://internetingishard.com/html-and-css/hello-css/](https://internetingishard.com/html-and-css/hello-css/)
- CSS Selectors [https://internetingishard.com/html-and-css/css-selectors/](https://internetingishard.com/html-and-css/css-selectors/)
- Links and Images [https://internetingishard.com/html-and-css/links-and-images/](https://internetingishard.com/html-and-css/links-and-images/)

**Validating CSS**

[http://jigsaw.w3.org/css-validator/](http://jigsaw.w3.org/css-validator/)

## Exercises

### Style your book chapter

Look at the book chapter that you marked up yesterday.

To this, add some CSS styling. Make use of:

- Colors, background images, styling text
- CSS selectors: elements, classes, ID, descendent selector
- Include styles in an external stylesheet

## Additional CSS practice

If you finish early, and/or you want some more practice, work through the following sections of exercises at W3Schools:

[https://www.w3schools.com/html/exercise.asp](https://www.w3schools.com/html/exercise.asp)

- HTML Styles, all exercises (inline styles only)
- HTML CSS, all exercises (embedded styles)
- HTML Links, exercise 4
- HTML Images, exercise 2
- HTML Classes, all exercises
- HTML IDs, all exercises

There are additional exercises at this link:

[https://www.w3schools.com/css/exercise.asp](https://www.w3schools.com/css/exercise.asp)

- CSS Syntax
- CSS How To
- CSS Background
- CSS Text
- CSS Links
- CSS Fonts

### On Your Own

Begin styling the &quot;about&quot; page you made yesterday.

If you still need more to do, make a page about some of your hobbies and activities and style it, or style the hobbies page you made yesterday. Include:

- What is this hobby exactly?
- How does it make you feel?
- Where have you traveled because of your hobby? What other life experiences has your hobby provided, that you might not otherwise experience?
- Photos and/or videos of your hobby in action
- Links to websites describing your hobby, or where hobbyists discuss what they do

If you manage to get as far as creating both web pages, link them together with a navigation bar.
