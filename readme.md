[![npm version](https://badge.fury.io/js/react-svg-use.svg)](https://badge.fury.io/js/react-svg-use)

# Since React v15.0 this package is no longer needed
React v15.0 brought [support for all of the SVG attributes](https://github.com/facebook/react/pull/6243) so if you're using that version, this addon is no longer necessary.

# Enable SVG `<use />` in React.js

[SVG sprites are awesome](https://css-tricks.com/svg-sprites-use-better-icon-fonts/), but they don't work out of the box with React.js, because `xlink:href` is not a standardly-supported SVG attribute. This component works around that limitation.

## Installation
`npm i react-svg-use -S`

## How do I ... use it?
First, set up your SVG sprite sheet so you have something simmilar to this:

```xml
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

```JavaScript
import Icon from 'react-svg-use'

React.createClass({
  render() {
    return (
      <Icon id='car' color='#D71421' />
    )
  }
})
```

The above snippet generates markup looking like this. Any additional `props` passed to the component will be added to the wrapping SVG element. For instance `className`, `id` etc.

```html
<svg>
  <use xlink:href="#car" style="fill:#D71421;"></use>
</svg>
```
