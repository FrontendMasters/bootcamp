---
order: 12
title: "Exercise: Make the Tests Pass"
path: "/tests"
---

As a way of making sure your code doesn't break over time, we write testing code to test our code. That would like something like this: `expect(addTwo(5)).toEqual(7)`. As long as your tests pass, you can deploy new code with confidence that you didn't break old things in the process of launching new code. It's a failsafe of sorts.

In this exercise, I wrote a bunch of tests that you need to make pass. You will not need to write any HTML or CSS. In the preview window, you'll see a summary of how many tests you have made pass and how many are still failing. The best approach here is to tackle each test one-at-a-time and ignore the others. You can even make other tests not run by changing the test-calling functions to be `xdescribe` or `xit` or you can only one test/suite run by changing them to `fdescribe` or `fit`, just remember to change them all back to `it` and `describe`.

These tests are hard. Be prepared for that. You're finished when you make all your tests pass.

The sorting one is particularly tough. If you need help, check out [my other course here][cs] and scroll down to the bubble sort part.

- [Exercise][exercise]
- [Answer][answer]

[exercise]: https://codepen.io/btholt/pen/QZKxRw?editors=0010
[answer]: https://codepen.io/btholt/pen/xyEajx?editors=0010
[cs]: https://btholt.github.io/four-semesters-of-cs/
