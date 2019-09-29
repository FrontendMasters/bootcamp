---
path: "/interactive"
title: "Making Your Site Interactive"
order: 15
---

Let's make a photo gallery. We have a bunch of cute dog photos (of my beloved pupper, Luna) that we want to show one at a time. So, using CSS and JavaScript together, how could we do that?

[Here are some images of my dog][luna] if you need images, otherwise feel free to use whatever images you want!

Make a file called index.html, and put this in it:

```htm
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Gallery</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="image-gallery">
      <img src="./images/1.jpg" alt="Luna" class="gallery-img active" />
      <img src="./images/2.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/3.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/4.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/5.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/6.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/7.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/8.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/9.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/10.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/11.jpg" alt="Luna" class="gallery-img" />
      <img src="./images/12.jpg" alt="Luna" class="gallery-img" />
    </div>
    <div class="btns">
      <button disabled="" class="btn prev">Prev</button>
      <button class="btn next">Next</button>
    </div>
    <script src="./gallery.js"></script>
  </body>
</html>
```

Inside of an `images` directory you'll create, you'll need to put photos there. You can grab my photos [here][photos] or you can put your own photos in and make sure the paths are correct.

Make a styles.css file and put this in there:

```css
* {
  box-sizing: border-box;
}

.gallery-img {
  display: none;
  max-height: 600px;
}

.active {
  display: block;
}

.image-gallery {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btns {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  background-color: #0074d9;
  color: white;
  font-size: 20px;
  padding: 5px 20px;
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
}

.prev {
  margin-right: 15px;
}

.btn:disabled {
  background-color: #666;
  cursor: not-allowed;
}
```

And then let's go do the JS

```js
let currentlySelected = 0;
const nodes = document.querySelectorAll(".gallery-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function previous() {
  nextBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  currentlySelected--;
  nodes[currentlySelected].classList.add("active");

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}

function next() {
  prevBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  currentlySelected++;
  nodes[currentlySelected].classList.add("active");

  if (currentlySelected + 1 === nodes.length) {
    nextBtn.disabled = true;
  }
}

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();
```

[Here's my version][my-version].

Key take aways here:

- We're using CSS to our advantage here with `display: none` and `display: block`. We're adding and removing classes to conditionally show and hide content.
- If we enable a button that's already enabled, it just stays enabled. That's why we can set the `disabled` flag to true every single time.

This is if you wanted lots of control over your gallery slider. As you may imagine, this is a really commonly-made widget for user interfaces. Lots of people have done this already. And many of them, being nice people, open source and release their code so you too can use it. So let's go see how to do that.

## Using Someone Else's Library

Like I said, this is a solved problem. So let's try using [Swiper][swiper]. Swiper is a great library used on many websites, including Frontend Master's own website. It's well written, small, and fast.

So let's try refactoring our app to use theirs instead of ours.

```htm
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Gallery</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/css/swiper.css"
    />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/1.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/2.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/3.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/4.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/5.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/6.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/7.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/8.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/9.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/10.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/11.jpg" alt="Luna" /></div>
        <div class="swiper-slide"><img src="./images/12.jpg" alt="Luna" /></div>
      </div>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/js/swiper.js"></script>
    <script src="./gallery.js"></script>
  </body>
</html>
```

Add this to your CSS

```css
.swiper-slide {
  text-align: center;
}

img {
  height: 600px;
}
```

And change your JS code to just be this:

```js
new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
```

- We're loading new CSS and JS from a CDN, which stands for content delivery network. Basically, somewhere out on the Internet someone is kindly hosting these JavaScript files for us so we don't have to.
- We're using the `new` keyword which we haven't previously. This more into object oriented programming and not common as much anymore in JavaScript. Suffice to say, for now you don't need to pay too much attention to it.
- We did have to modify the HTML to accomodate how the JS works. That's fine.
- Now we're using their JS and it looks amazing! Trying clicking and dragging, like you would on an smart phone. Works really well.

Let's go add some new options to it. [Here is the documentation so you can see everything it does][api]. It does a lot! Try experimenting!

Here's a good one, add `effect: "flip"` in your JS inside the new Swiper declaration. Try changing the effect to `"fade"` or `"cube"` too.

Also try adding `slidesPerView: 3` as well. You should see three slides up front instead of 1. Cool!

## Animations!

Next I'm going to show you how to do some JS animations with a library called Popmotion! The point of this exercise here is show you how to use existing code snippets and modify them for your own use!

In your HTMl, add the following:

```htm
<!-- add this above the swiper-container
     feel free to use any emoji in you would like -->
<nav class="main-nav"><h1 class="brand">🐶</h1></nav>

<!-- add this above the other two script tags -->
<script src="https://unpkg.com/popmotion@8.5.0/dist/popmotion.js"></script>
```

In your CSS, add:

```css
body {
  padding: 0;
  margin: 0;
}

.main-nav {
  background-color: black;
  color: white;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  padding: 15px;
}

.brand {
  margin: 0;
  font-size: 50px;
  z-index: 10;
  cursor: grab;
}
```

Great! Now let's grab some code [from Popmotion's site][popmotion]. Scroll down to the section on Spring. Click fork the CodePen. Grab the JavaScript and paste it in your JavaScript file.

```js
const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector(".brand");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start(e => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
  spring({
    from: ballXY.get(),
    velocity: ballXY.getVelocity(),
    to: { x: 0, y: 0 },
    stiffness: 200
    // mass: 1,
    // damping: 10
  }).start(ballXY);
});
```

Should look something like it does above. The one thing I changed is the line `const ball = document.querySelector('.box');` so it select `.brand` instead of `.box`. Now refresh your page and try to drag your emoji around! Pretty cool!

When you pull code off sites like this, you should make a decent attempt to learn what you can about it. The gist is that we're listening for `mousedown` events to start dragging the ball, and then on `mouseup` (when you release the ball) to spring it back into place.

If you want to, you can totally swap an image in there too. Change your nav to look like this:

```htm
<nav class="main-nav"><img class="brand" alt="logo" src="./images/bh.png" /></nav>
```

and this to your CSS

```css
.brand {
  /* leave the existing stuff in .brand, add this to it */
  background-color: white;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  border: 1px solid #666;
}
```

[Here's my second version, with the libraries][my-version-2].

## Project

Take your exisitng portfolio and add some sort of animation to it or add a photo gallery, either using Swiper or the one you wrote personally!

[luna]: ./luna.zip
[my-version]: ./gallery/index.html
[my-version-2]: ./gallery/with-libraries.html
[api]: http://idangero.us/swiper/api/#parameters
[swiper]: http://idangero.us/swiper/
[popmotion]: https://popmotion.io/pure/
