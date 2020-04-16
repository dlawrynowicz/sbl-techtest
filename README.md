### Excercise
```
Using the provided JSON endpoint: fetch the data and render a collection of card elements that contain the available data. This collection of cards should work appropriately across all viewport sizes from small (mobile) all the way up to very large (4K desktop display). The look and feel of each card element should resemble that of the linked Sketch Cloud document.
```

### Decisions
I'm going to create ReactJS app for purpose of this exercise.
I've choose it because there is good webpack config already in place, so we will be covered with JS browser coverage - I will use ES6 for most of the code.
We can throw `node-sass` to help with styling and again webpack will cover us with browser coverage.

### Log
- setup env
- add api module
- add card component
- display cards
- apply design
- test & tweek responsivnes
