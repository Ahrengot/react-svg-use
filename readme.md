[![npm version](https://badge.fury.io/js/react-svg-use.svg)](https://badge.fury.io/js/react-svg-use)

# SVG `<Use />` React.js Component

[SVG sprites are awesome](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)! This component saves you the time building and maintaining your own `<Use />` react component within your React.js projects.

## Installation
`npm i react-svg-use -S`

## How do I ... use it?
First, set up your SVG sprite sheet so you have something similar to this:

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
  <symbol id="car">
    <path d="..."/>
  </symbol>
  <symbol id="bike">
    <path d="..."/>
  </symbol>
  <symbol id="skateboard">
    <path d="..."/>
  </symbol>
</svg>
```

Then, simply import and use the icon where you need it

```javaScript
import Icon from 'react-svg-use'

React.createClass({
  render() {
    return (
      <Icon
        xlink='car'
        fillColor='#D71421'
        className='car-icon'
      />
    )
  }
})
```

The above snippet generates markup looking like this. Any additional `props` passed to the component will be added to the wrapping SVG element. For instance `className`, `id` etc.

```html
<svg class="car-icon">
  <use xlink:href="#car" style="fill:#D71421;"></use>
</svg>
```
