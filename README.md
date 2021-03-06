### Excercise
```
Using the provided JSON endpoint: fetch the data and render a collection of card elements that contain the available data.
This collection of cards should work appropriately across all viewport sizes from small (mobile)
all the way up to very large (4K desktop display).
The look and feel of each card element should resemble that of the linked Sketch Cloud document.
```

### Demo
WebApp is available here https://sbl-techtest.web.app/

### Plan
- setup env
- add api module
- add card component
- display cards
- apply design
- test & tweak responsiveness

### Decisions
I'm going to create ReactJS app for the purpose of this exercise.
I chose it because there is good webpack config already in place, so we will be covered with JS browser coverage - I will use ES6 for most of the code.
We can throw `node-sass` to help with styling and again webpack will cover us with browser coverage.

It looks like the API returns images in different sizes, I'm going to use `background-image` to make it easier to scale.
Some records returned by the API don't have `runningTime` prop, going to display the element only when property is available

Going to use `em` and `rem` values for css so we can scale things up/down as needed.

Within the first hour I was able to display elements, they still needed some css tweaks.
Spent another hour tweaking CSS.

App is built in the way it can be translated to SSR, we should be able to include it to any website, and it should respect parent styling and scale up accordingly.
Design is not implemented in a `pixel perfect` way, but I feel like it is close enough for the purpose of this exercise. 
With compromise over `pixel perfect` we have scalable components.

The solution is deployed to Firebase hosting.

### ToDo
- Seek feedback
- refactor code
- add SSR?


### Development
- `yarn start` to start development server
- `yarn build` to build production app
- `firebase deploy` to deploy to production
