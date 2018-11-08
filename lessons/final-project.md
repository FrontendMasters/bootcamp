---
title: "Final Project: Your Own Fox Pet"
path: "/fox"
order: 19
---

<style>
.fox-sleep.fox {
  background-image: url(./fox-pet/pet/Sleeping.png);
  background-repeat: no-repeat;
  width: 250px;
  height: 155px;
  animation: sleeping 4s steps(4) infinite;
}

@keyframes sleeping {
  to {
    background-position: -1000px;
  }
}

.fox-celebrate.fox {
  background-image: url(./fox-pet/pet/Yay.png);
  background-repeat: no-repeat;
  width: 130.8px;
  height: 213px;
  animation: celebrate 2s steps(5) infinite;
}

@keyframes celebrate {
  to {
    background-position: -654px;
  }
}

.fox-idle {
  background-image: url(./fox-pet/pet/AtRest.png);
  background-repeat: no-repeat;
  width: 117px;
  height: 165px;
  animation: idle 2s steps(3) infinite;
}

@keyframes idle {
  to {
    background-position: -372px;
  }
}
</style>

The great and final project! I would argue this one is the most fun too. Do you remember [those virtual][virtual-pet] [pet toys][virtual-pet-2] from the 90s? They were the bane of every poor teacher and parent's existance. They're essentially needy little virutal pets that need you to feed and clean up their poops every few hours. We're going to build our own!

Luckily, [Ms Alice Brereton][alice] has created some more beautiful assets for us to use for the game.

[Here is my version of the game][fox].

The code for this game is hard, but this is your final project too! And there are _many_ correct ways to program it. I'll share with you some tips and tricks and how I did it but feel free to explore and learn!

# Requirements

- The game starts in an initialized state. The user must press the center game to get started.
- Users can switch between the three icons on the bottom using the left and right button. To press one of the icons, they will click the middle button. Users cannot directly click the icons.
- If they reach the end of the icons and try to go further (click the right button when the right-most icon is selected) it should loop around.
- When the user starts, the fox will hatch after showing the hatch animation.
- Once the fox is hatched, show the fox in an idle animation in the day time.
- The user can switch the weather from day to rain using the weather icon.
- The fox can be fed any time, even if not hungry, using the fish icon. When they feed the fox, it should reset the fox's hunger timer.
- The fox cannot have the poop cleaned up unless there is poop to be cleaned up. When a user cleans up poop, it should reset the fox's poop timer.
- The fox will get hungry and have to poop in random intervals. Feel free to play with the timing. When this happens, switch the fox to those respective animations.
- If the fox is hungry and poops at the same, pick one of the animations to show.
- If the user hasn't fed a hungry fox or clean up a fox's poop after a random interval, it should cause the fox to die and go to the game over screen.
- After a longer random interval of day/rain, it should become night. It stays night for a random interval. The fox does not get hungry, poop, or die in its sleep. Once it wakes up, it starts with a new random interval of hunger and poop. You cannot change the weather, clean up poop or feed a sleeping fox.
- Once a fox dies, the landscape goes into the death scene, the fox becomes the tombstone, and the game is over. If the user presses the middle button again, it restarts the game with a new hatch.
- Using a modal, you should tell the user to restart the game by pressing the middle button.
- The fox should be able to die, get hungry, poop, be fed, have the poop cleaned up, or fall asleep when it is pooping, being fed, sleeping, hatching, or dead.

Phew. That's a lot of requirements! Now let's start about starting points. I'm going to give you three different places to start from and make a recommendation on where I think you should start.

[Here is the zip file you will need][zip]

# Starting Points

## Starting Point #1

Only write the JavaScript. The HTML, all of the CSS, and all of the images will be provided for you. Take everything from the download.

## Starting Point #2

**Recommendated Starting Point**. You will have to write all the JavaScript and HTML from scratch. You will write _some_ of the CSS but not the animations parts. You will still have to do some difficult layout things with CSS.

From the download, use all of the images _and_ the the `sprites.css` file. Make sure all the relative paths remain the same since it will reference the images by relative pathhs. Do not use fox.css, fox.js, or fox.html.

## Starting Point #3

Write everything totally from scratch using only the images I give you. This is going to be very hard if this is your very first exposure particulary to CSS because there are some advance concepts you'll need to accomplish, like animations. Do this only if you're comfortable (or feel comfortable diving into learning about) animation, CSS keyframes, and background positioning. You'll just need the images from the download but don't use any of the HTML, CSS, or JavaScript.

# Concepts You Will Need

## Animation via step functions

If you're doing option #1 or #2 above, this is just more for your information. We first showed you animations via keyframes in the Mole game. Now we're going to show you animations via the step function and sprites. A _sprite_ is one frame of an animation, laid out on a sprite sheet like below:

<img style="background-color: black" src="./fox-pet/pet/AtRest.png" />

Notice all three frames of the image are on _one_ image. Also notice they (exactly) spaced out. The way we accomplish CSS here is to use the same keyframe animations we did before but instead of telling they keyframes to be smooth, we use a step functions to make the transitions to be sudden so that it seems like they're moving. Let's see some examples.

```html
<style>
  .fox-bg {
    background-image: url(./fox-pet/pet/AtRest.png);
    background-color: black;
    background-repeat: no-repeat;
    height: 165px; /* exactly how tall the image is */
  }

  .fox-1 {
    animation: 3s fox-movement linear infinite;
    width: 100%;
  }

  .fox-2 {
    animation: 3s fox-movement steps(3) infinite;
    width: 100%;
  }

  .fox-3 {
    animation: 3s fox-movement steps(3) infinite;
    width: 117px;
  }

  @keyframes fox-movement {
    to {
      background-position: -372px /* this is exactly how wide the image is */
    }
  }
</style>
<div class="fox-1 fox-bg"></div>
<div class="fox-2 fox-bg"></div>
<div class="fox-3 fox-bg"></div>
```

The steps function takes how many steps you want as parameters. In our case, since there are three frames, we want 3 as how many steps there are. Then it will automatically do three equal steps which will make the fox seem animated. This is all done for you if you do option #1 or #2. No JavaScript needed for these animations.

## Timing

You had to deal with a similar thing with the mole game but now you have a more complicated flow of states you need to deal with. I recommend defining up-front all of the various states the fox can be in and then make sure that state is always synced. Something like this:

```html
<div id="fox" style="background-color:black; cursor: pointer" class="fox fox-idle"></div>
<div>Clock: <span id="clock">starting …</span>
<script>
  const clockSpan = document.getElementById("clock");
  const foxDiv = document.getElementById("fox");
  let clock = 0;
  let state = "IDLE";
  let nextCheck = Date.now();

  function tick() {
    if (nextCheck <= Date.now()) {
      if (state === 'IDLE') {
        clock++;
        clockSpan.innerText = clock;
      }
      nextCheck = Date.now() + 1000;
    }

    requestAnimationFrame(tick);
  }

  function celebrate() {
    foxDiv.classList.remove('fox-idle');
    foxDiv.classList.add('fox-celebrate');
    state = 'CELEBRATE';
  }

  function sleep() {
    foxDiv.classList.remove('fox-celebrate');
    foxDiv.classList.add('fox-sleep');
    state = 'SLEEP';
  }

  function idle() {
    foxDiv.classList.remove('fox-sleep');
    foxDiv.classList.add('fox-idle');
    state = 'IDLE';
  }


  foxDiv.addEventListener("click", function() {
    if (state === 'CELEBRATE') {
      // do nothing
    } else if (state === 'IDLE') {
      celebrate();
      setTimeout(sleep, 4000)
    } else {
      idle();
    }
  });

  tick();
</script>
```

Try clicking on the fox above. Notice the clock advances when the fox is awake but when it's either celebrating or sleeping the clock stops. This is the power of keeping track of state like this (instead of a bunch of `true`/`false` boolean variables).

Notice we're also using a combination of `setTimeout` and `requestAnimationFrame` together. `setTimeout` is useful for one-off events (like celebrating before sleeping) whereas `requestAnimationFrame` is useful for ongoing things.

Notice also we're using these states in the event listener to decide what to do. If the fox is celebrating, do nothing. If the fox is idle, celebrate and set a timer to fall asleep. If the fox is asleep, wake up.

Lastly, notice the clock only advances when the fox is idle. This is the sort of pattern you may consider following when tracking hunger and pooping in your game.

## Looping around

Here's a cool trick to loop around an array (like for the icons.) There's a thing called the _modulo operator_ in JavaScript allows you to do that. An _operator_ is something the `+`, `-`, `/`, or `*`: they _do_ or \_operate on something.

The modulo, `%`, is like the _remainder_ of a long divison. Do you remember long division from school? If I said the answer of 7 / 3 was 2 r 1, where 2 is how many times 3 wholly fits into 7, and the r 1 is how many are left over, that 1 is what modulo gives you. So if I say 7 % 3, the answer would be 1. 9 % 3 is zero, and 100 % 3 is 1. So you can see it's useful for looping around. Let's see an example.

```html
<button id="increment">Add one</button>
<div id="whole">1</div>
<div id="modulo">1</div>
<script>
  const wholeDiv = document.getElementById('whole');
  const moduloDiv = document.getElementById('modulo');

  let num = 1;

  document.getElementById('increment').addEventListener('click', function() {
    num++;
    wholeDiv.innerText = num;
    moduloDiv.innerText = num % 5;
  })
</script>
```

As the first number continue continues the rise, notice the second one cycles 0 to 4. This is useful for anything that needs to loop around.

# Final Advice

Like the mole game before, this project is best broken into smaller pieces. Start with a very small task, then do another small task, then another … until eventually you've completed everything. Best of luck!

- [Here is my CSS (game)][css-sprite].
- [Here is my CSS (game)][css-game].
- [Here is my HTML][html].
- [Here is my JavaScript][js].

[virtual-pet]: https://en.wikipedia.org/wiki/Tamagotchi
[virtual-pet-2]: https://en.wikipedia.org/wiki/Giga_Pet
[alice]: https://www.pickledalice.com/
[fox]: ./fox-pet/fox.html
[zip]: ./fox.zip
[css-sprite]: https://github.com/FrontendMasters/bootcamp/blob/master/static/fox-pet/sprites.css
[css-game]: https://github.com/FrontendMasters/bootcamp/blob/master/static/fox-pet/fox.css
[html]: https://github.com/FrontendMasters/bootcamp/blob/master/static/fox-pet/fox.html
[js]: https://github.com/FrontendMasters/bootcamp/blob/master/static/fox-pet/fox.js
