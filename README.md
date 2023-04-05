<!--hide-->
# Simple Counter with React
<!--endhide-->

# 📝 Instructions

Create a seconds-counter component, called ***SecondsCounter***. It should look [like this one](https://github.com/breatheco-de/exercise-simple-counter-react/blob/master/preview.gif).

- The whole purpose of the component is to display how many seconds have passed since the website finished loading (onLoad).
- Use the ***ReactDOM.render()*** to render the component into the web-app.
- Use the ***setInterval()*** function to re-render the component on every second.
- The component does not need a local state, you can pass the number of seconds as **props** like this:

```jsx
<SecondsCounter seconds={3434} />
```
- You can find the clock icon on the left of the component in [Font Awesome](https://fontawesome.com/).

# 🔥 Bonus
- Create an option to countdown from a given number.
- Create stop, reset, and resume functionality
- Create an alert when the user reaches a specified time, if the user enters "10", an alert should render notifying the user that their time was reached

# Technologies used:
React, HTML, CSS, Javascript
