# Click Counter

This thrilling site should count the number of times the user has clicked the button. It will require a new tricks in JavaScript that you might not have seen before.


## Instructions

Write JavaScript in `script.js` to make the number go up by 1 each time the button is clicked.

* Select the button with querySelector and add an event listener that logs "+1 clicked" when the button is clicked
* In the console, find the `h2` that has the number in it.
* Inspect the number in the h2 using `.textContent`
* Still in the console, try changing the content of the `h2` by setting it equal to something:

```
document.querySelector('h2').textContent = "something"
```

* instead of assigning textContent to "something", assign it to the value of the variable `count`. The end of the line should be  `= count`
* copy the code from the Console into the event listener for the button
* after that line in the event listener that changes textContent, add the line `count = count + 1` to increase the count each time.

When you run the site, the button should make the number go up.

**Notes:**
* we haven't talked much about variables, but they are really cool for keeping track of a value that changes over time, like the count of how many times the button has been clicked

## Extension

Once you have the code working, feel free to try other ideas:

* style the page more nicely
* increase the count by more than one each time
* add a button to decrease the count
* add a button to reset the count to 0

There are lots of different things to try, so be creative!