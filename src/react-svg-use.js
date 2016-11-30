import React from 'react';

export default props => {
  let otherProps = Object.assign({}, props);
  delete otherProps.id
  delete otherProps.color

	return (
		<svg { ...otherProps }>
      <use xlinkHref={ `#${ props.id }` } style={{ fill: props.color }} />
		</svg>
	)
}
