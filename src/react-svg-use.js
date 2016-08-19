import React from 'react';
import DOMProperty from 'react/lib/DOMProperty';

// xlink:href is not a standardly-supported svg attribute, but you can tell
// React that it is ok.
DOMProperty.injection.injectDOMPropertyConfig({
  isCustomAttribute: function (attributeName) {
    return (attributeName === 'xlink:href');
  }
});

export default props => {
	return (
		<svg { ...props } >
			{ React.createElement('use', { 'xlink:href': '#' + props.id, style: { fill: props.color } }) }
		</svg>
	)
}
