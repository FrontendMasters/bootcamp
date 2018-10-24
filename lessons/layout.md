---
order: 4
title: "Layout"
path: "/layout"
---

## Together in class

Jen will discuss the box model and introduce layouts, coding with you in VSCode. We will code a navigation bar and code a page layout.

![Box model](./images/css-boxmodel.png)

## Box model properties and values

### `border`

- `border-width`
- `border-style`
- `border-color`
- `border-top`
- `border-top-width`
- `border-top-style`
- `border-top-color`

Same for `bottom`, `left`, `right`

Requires a width, style, and color to display.

Shorthand: `border: 1px solid red;`

```html
<style>
.border1 {
    border-width: 5px;
    border-style: solid;
    border-color: red;
}
</style>

<p class="border1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

`Width` values: can be anything you want.

`Style` values: `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset`. Also `none`, `hidden`. Without a style, the border will not display.

`Color` values: Any color you want, written in any format you want!

### `border-radius`

- border-bottom-left-radius
- border-bottom-right-radius
- border-top-left-radius
- border-top-right-radius

Creates rounded corners. Specify a large radius to make pills or circles.

```html
<style>
.borderradius {
    border: 2px solid black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
</style>

<p class="borderradius">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
```

Size can be the same on 4 sides, or different sizes such as `border-radius: 20px;`. See "shorthand" below for understanding values.

```html
<style>
.borderradius2 {
    border: 2px solid black;
    border-radius: 100px;
}
</style>

<img class="borderradius2" src="https://placekitten.com/g/100/100">
```

### `padding`

- padding-top
- padding-right
- padding-bottom
- padding-left

Padding is the distance between the content and the border.

```html
<style>
p.padding1 {
    padding: 20px;
    background-color: blue;
}
</style>

<p class="padding1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

```html
<style>
p.padding2 {
    padding: 10px 30px;
    background-color: blue;
}
</style>

<p class="padding2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

```html
<style>
p.padding3 {
    padding: 5px 0 20px 1rem;
    background-color: blue;
}
</style>

<p class="padding3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

```html
<style>
p.padding4 {
    padding-left: 15px;
    background-color: blue;
}
</style>

<p class="padding4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

See "shorthand" below for understanding values.

### `margin`

- margin-top
- margin-right
- margin-bottom
- margin-left

Margin is the area outside of the border.

```html
<style>
p.margin1 {
    margin: 20px;
    background-color: blue;
}
</style>

<p class="margin1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

```html
<style>
p.margin2 {
    margin: 10px 30px;
    background-color: blue;
}
</style>

<p class="margin2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

```html
<style>
p.margin3 {
    margin: 5px 0 20px 1rem;
    background-color: blue;
}
</style>

<p class="margin3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

```html
<style>
p.margin4 {
    margin-left: 15px;
    background-color: blue;
}
</style>

<p class="margin4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

See "shorthand" below for understanding values.

### `float`

Pulls the element from "normal flow" and floats it in the direction indicated. Space the element occupied is eliminated.
Values include `left`, `right`,`none`

Note: if you are floating an element other than an image, you should also specify a width.

```html
<style>
.float1 {
    float: left;
}
</style>

<p>
<img class="float1" src="https://placekitten.com/g/100/100">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

### `clear`

What you must do if you float! Clear re-establishes normal flow.
Values include `left`, `right`, `both`

```html
<style>
.p-float1 {
    float: left;
    width: 200px;
    height: 75px;
    margin: 20px;
    border: 5px solid blue;
}
.p-clear2 {
    border: 4px solid red;
    clear: left;
}
</style>

<p class="p-float1">Lorem ipsum </p>
<p class="p-clear2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

### `width`

The width of a particular element. In general, use relative units like `%`, `em`, `rem`, rather than `px`.

```html
<style>
p.example-width {
    width: 20%;
}
</style>

<p class="example-width">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

### `height`

The height of a particular element. In general, use of height is to be avoided on content, so it can expand as needed with changes in font size or the type of content.

```html
<style>
p.example-height {
    height: 12rem;
    background: blue;
}
</style>

<p class="example-height">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

### `display`

HTML tags have two methods of display by default: block and inline.

There are other values for this property which we will discuss today, including flex and inline-block.

display: block;
display: flex;

## [Shorthand](http://css.maxdesign.com.au/selectutorial/rules_shorthand.htm)

```html
<style>
p.padding-shorthand1 {
    padding-left: 4em;
    padding-right: 2em;
    padding-top: 1em;
    padding-bottom: 3em;
}
</style>

<p class="padding-shorthand1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

Will generally be written as: TRouBLe -- top, right, bottom, left

Some people think of this as clockwise as well:

```html
<style>
p.padding-shorthand2 {
    padding: 1em 2em 3em 4em;
}
</style>

<p class="padding-shorthand2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

![Shorthand](./images/css-shorthand.png)

```
margin-top: 10px;
margin-right: 2em;
margin-bottom: 3%;
margin-left: 2rem;
```

You can use one, two, three and four values within a shorthand declaration. For example, the rule below will apply padding to all sides of a box:

```html
<style>
p.example-shorthand1 {
    padding: 5em;
    background-color: blue;
}
</style>

<p class="example-shorthand1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

The rule below will apply 1em of padding to the top and bottom, and 2em of padding to the left and right of the box.

```html
<style>
p.example-shorthand2 {
    padding: 1em 5em;
    background-color: blue;
}
</style>

<p class="example-shorthand2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

The rule below will apply 1em of padding to the top, 2em of padding to the left and right, and 3em to the bottom of the box.

```html
<style>
p.example-shorthand3 {
    padding: 1em 3em 5em;
    background-color: blue;
}
</style>

<p class="example-shorthand3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

The rule below will apply 1em of padding to the top, 2em of padding to the right, 3em of padding to the bottom and 4em of padding to the left of the box.

```html
<style>
p.example-shorthand4 {
    padding: 1em 3em 5em 7em;
    background-color: blue;
}
</style>

<p class="example-shorthand4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
```

## References

### Box Model

- The CSS Box Model: [https://css-tricks.com/the-css-box-model/](https://css-tricks.com/the-css-box-model/)
- CSS box-sizing property: [https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- Paul Irish on border-box: [https://www.paulirish.com/2012/box-sizing-border-box-ftw/](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

### Understanding Floats and Clears

- All About Floats: https://css-tricks.com/all-about-floats/
- Floatutorial: http://css.maxdesign.com.au/floatutorial/
- How Floating Works: https://bitsofco.de/how-floating-works/
- The Clearfix: https://css-tricks.com/snippets/css/clear-fix/

### Block level vs. inline elements; inline-block

- List of block-level elements: [https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
- List of inline elements: [https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
- Should you use inline-blocks as a substitute for floats? [http://vanseodesign.com/css/inline-blocks/](http://vanseodesign.com/css/inline-blocks/)

### Interneting is Hard

- The Box Model [https://internetingishard.com/html-and-css/css-box-model/](https://internetingishard.com/html-and-css/css-box-model/)
- Floats [https://internetingishard.com/html-and-css/floats/](https://internetingishard.com/html-and-css/floats/)

## Exercises

### Box model worksheets

I've given you some worksheets that have you calculate the width of the content and the total width of the area, based on either the content box model or the border box model. Work through the math and check your answers, provided separately. Ask questions if you have them!

### Finish the book chapter

Once again, visit your book chapter. Choose some images and include them, floating them in place. (Don't forget to clear!) Consider including some quotes, or navigation to subheads.

### Code a blog page

I've given you some images and a picture of a web page layout. You have everything you need to lay this page out as a blog page. Can you figure out how to code this?

### Additional CSS practice

If you finish early, and/or you want some more practice, work through the following sections of exercises at W3Schools:
https://www.w3schools.com/css/exercise.asp

- CSS Border
- CSS Margin
- CSS Padding
- CSS Height/Width
- CSS Box Model

### On Your Own

Finally, finish the styling of your about and hobby web pages.

Create a navigation bar with appropriate styling to link the pages together. Link your book excerpt page to this site as well.

Create columns on your page, with main content and a side bar.

In the side bar, feature favorite photos, favorite quotes, links to favorite websites, or other content that supplements the main message of the web page.
