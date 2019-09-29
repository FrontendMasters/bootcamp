---
order: 18
title: "Exercise: Feed-A-Star-Mole"
path: "/mole"
---

Here's your next project, a fun variant on the game Whack-A-Mole. If you're not familiar with the premise, the idea is that little moles will pop out of holes and the game is to tap them before they go back in their holes. In our variant, they're hungry little star moles and we're going to feed them worms! After a user gets 10 points, they win the game! There are also more-rare royal star moles that are worth double. If a user doesn't click on a mole in time, the mole frowns and heads back in its hole. If you manage to feed it in time, it smiles happily and disappers back into its hole.

We even have beautiful artwork for you to use, drawn by the talented [Alice Brereton][alice].

[Here's my version of the game.][mole]

This is a hard project but you can do it! I'd recommend taking it in steps rather than trying to do everything at once. Some sort of progression. I'd recommend something like:

- Get all the CSS and HTML on the page. Have ten holes with a hungry mole in each. No JS done yet.
- Make the moles show up and disappear (don't worry about the sad face / butt yet.) Don't make them clickable yet, just have them disappear and reappear after a random interval.
- Make the hungry moles clickable. If you click on one, add 1 point to your score.
- After 10 clicks, show the win screen.
- Show the worm meter. As a player clicks on moles, show more and more of the worm.
- Make one in ten of the moles that show up a royal mole. If a user clicks a royal mole, add 2 points to their score.
- If a user doesn't click a mole in time, show a sad mole.
- If a user does click a mole in time, show a fed mole.
- After both sad and fed moles, show a mole butt.
- You're done!

Feel free to play with the timing. In my version I used the following timings:

- Hungry moles show up for two seconds
- Sad, fed, and mole butts show for a half second.
- Moles wait at least two seconds before showing up in the same hole and no more than twenty seconds.

Some concepts you'll need to know.

- `Date.now()` is going to be a useful function for you. It gives you back how many milliseconds have transpired since January 1, 1970 (often to referred as UNIX time or UNIX Epoch time, [see here if you want to know more][epoch]).

```javascript
console.log(Date.now());
```

- You can handle the timing one of two ways: `setInterval` or `requestAnimationFrame`
  - `setInterval` allows you to run a function every X milliseconds. So if I wrote `setInterval(function() { console.log('hi') }, 1000);` would log `hi` every second.
  - `requestAnimationFrame` is preferred. It asks the browser once it's finished doing the previous render to call you function. This happens quite frequently (on the order of milliseconds) so be aware of that. The nice thing is that requestAnimationFrame doesn't run while the browser tab isn't in focus.

```html
<div>setInterval <span id="interval">0</span></div>
<div>requestAnimationFrame <span id="raf">0</span></div>
<script>
  const interval = document.getElementById("interval")
  const raf = document.getElementById("raf")

  let intervalCount = 0;
  setInterval(function() {
    interval.innerText = intervalCount;
    intervalCount++;
  }, 1000);

  let rafCount = 0;
  let runAgainAt = Date.now();
  function rafCounter() {
    if (Date.now() > runAgainAt) {
      raf.innerText = rafCount;
      rafCount++;
      runAgainAt = Date.now() + 1000;
    }
    requestAnimationFrame(rafCounter);
  }
  requestAnimationFrame(rafCounter);
</script>
```

- The latter is a bit more complicated with `requestAnimationFrame` but it allows the browser to yield back to you when its idle. The former will run no matter after the allotted amount of milliseconds.
- Notice with `requestAnimationFrame`, I'm checking after `Date.now() + 1000` milliseconds have gone by. This is how you make it run only every second.
- You'll probably want to represent each mole as an object. You'll need to keep track of what state each mole is in ("fed", "hungry", "leaving", "sad", "gone"), if it's a royal or not, and the time to update its status again.
- Statuses flow predictably. "gone" goes to "hungry" next, "hungry" goes to "sad", "sad" goes to "leaving", and "leaving" to "gone", always. "hungry" can go to "fed" if they're clicked in time. They go from "fed" to "leaving" and then back into the normal cycle.
- You can modify the `src` of an image and it updates the image.

```html
<img style="background-color: brown" id="mole" src="../mole-game/mole-hungry.png" />
<script>
  const mole = document.getElementById("mole")

  let isHungry = true;
  let nextTime = Date.now();
  function next() {
    if (Date.now() > nextTime) {
      if (isHungry) {
        mole.src = './mole-game/mole-sad.png';
      } else {
        mole.src = './mole-game/mole-hungry.png';
      }
      isHungry = !isHungry;
      nextTime = Date.now() + 1000;
    }
    requestAnimationFrame(next);
  }
  next();
</script>
```

You'll need all the static assets (images.) [Grab them here.][assets]

Good luck!

If you want to see my answers, [here is the JavaScript][js], [here is the CSS][css], and [here is the HTML][html].

[alice]: https://www.pickledalice.com/
[mole]: ./mole-game/mole.html
[epoch]: https://en.wikipedia.org/wiki/Unix_time
[assets]: https://frontendmasters.github.io/bootcamp/mole.zip
[js]: https://github.com/btholt/bootcamp/blob/master/static/mole-game/mole.js
[css]: https://github.com/btholt/bootcamp/blob/master/static/mole-game/mole.css
[html]: https://github.com/btholt/bootcamp/blob/master/static/mole-game/mole.html
