---
title: "Exercise: Dog App"
path: "/dogs"
order: 17
---

We're going to build a dog picture viewer using the [dog.ceo API][dogceo]. This project is going to allow users to select a breed from a drop down list and then display a random picture of that breed.

[Here's my version of it.][dog-viewer]

Requirements:

- Here are the API docs.
- The list of breeds can be obtained by `List all breeds` API (see the docs linked above.) Request the list of breeds and then use those to create all the `option`s for the `select`.
- When the page first loads, show a loading spinner until the image has loaded. I used an emoji with CSS animations to do so. Feel free to [look at what other people have done][loading], write your own (short tutorial will be below), or use an animated GIF. When the image loads, hide the spinner and show the image.
- You already know how to change the `src` of an `img`, but if you immediately hide the loading spinner and show the `img`, you'll have a flash of time where nothing on the page since the image hasn't loaded yet. You can side step this by using `addEventListener` on the `img` tag and listen for the `"load"` event. Once the `"load"` event happens, it means the image is loaded and ready to be shown.
- You can do AJAX request using fetch and promises like I showed you in the previous chapter. I'm now going to show you a brand new feature called async / await and it makes this a lot easier.

Let's chat about CSS animations a second here:

```html
<style>
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }

  @keyframes psychadelic {
    100% {
      filter: hue-rotate(360deg);
    }
  }

  .mole {
    height: 334px;
    width: 334px;
    background-color: brown;
    border-radius: 50%;
  }

  .color {
    animation: psychadelic 3s linear infinite;
  }

  .spin {
    animation: spin 3s ease-in-out infinite;
  }
</style>
<img src="https://frontendmasters.github.io/bootcamp/mole-game/mole-hungry.png" style="background-color: brown; border-radius: 50%" class="mole color" />
<img src="https://frontendmasters.github.io/bootcamp/mole-game/king-mole-hungry.png" style="background-color: brown; border-radius: 50%" class="mole spin" />
```

<!-- <img src="../mole-game/king-mole-hungry.png" style="background-color: brown; border-radius: 50%" class="mole color" />
<img src="../mole-game/mole-hungry.png" style="background-color: brown; border-radius: 50%" class="mole spin" /> -->

- These `@keyframes` animations are re-usable animations that we define once and can use as many times as we want.
- The second word (in our case `spin` and `psychadelic`) are what we called the animations, similar to a variable name. It's what we can refer to it as later.
- Inside the `@keyframes` we have a `to` property. You can define very fine grain steps in the animation but here we want it to infer the steps. We _could_ add `from { transform: rotateZ(0deg); }` but the browser already knows that it's at `0deg` rotation. In this case, it just infers that you want it to start from where it is and animate to the `to` point.
- You can also use percentages. Instead of `to` you'd use `100%` and instead of `from` you'd use `0%`. You can put as many steps as you want in there too e.g. `1%`, `10%`, `50%`, `92%`, etc.
- Where you want to _use_ animation, put something like `animation: spin 1s infinite linear;`. This will use the `spin` animation we defined above, will take 1 second to do one iteration of the animation, will do it with linear easing, and will continue to do it infitiely. The order is not important here.
- Easing allows you to make it seem elastic when it starts and stops, like a ball bouncing. It's faster at the bottom of the bounce and slower at the top.

Let's talk about async / await for a second. So far we've been using promises and `.then`. There's an easier way to do it and it's called async / await.

```html
<button id="get-doggo">Get Doggo</button>
<img style="height: 250px;" id="doggo" src="http://placecorgi.com/250">
<script>
  async function getDoggo(event) {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const resJson = await res.json();
    document.getElementById("doggo").src = resJson.message;
  }

  document.getElementById('get-doggo')
    .addEventListener('click', getDoggo)
</script>
```

Notice the function getDoggo has the `async` keyword there. This means inside of this function we can use `await`. `await` takes a promise and then _pauses_ the function until that promise resolves and gives you the answer back. It makes the code a lot simpler to understand. If you need to deal with errors, you can just try / catch. Feel free to write code this way for this exercise or continue using promises. Do note that I can't say `await` in the top level; it has to be inside of an async function.

Your page does not have to look like mine. Feel free to design it however you want. Feel free to copy me too!

Good luck!

If you want to see my answers, [here is the JavaScript][js], [here is the CSS][css], and [here is the HTML][html].

[dogceo]: https://dog.ceo/dog-api/documentation/
[dog-viewer]: https://frontendmasters.github.io/bootcamp/dog-viewer/dog.html
[loading]: https://codepen.io/tag/spinner/#
[js]: https://github.com/btholt/bootcamp/blob/master/static/dog-viewer/dog.js
[css]: https://github.com/btholt/bootcamp/blob/master/static/dog-viewer/dog.css
[html]: https://github.com/btholt/bootcamp/blob/master/static/dog-viewer/dog.html
