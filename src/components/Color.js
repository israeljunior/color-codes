import React from 'react';

class Color extends React.Component {
	render() {
		let {color} = this.props;

		if(color.startsWith('#')) {
			color = color.substr(1);
		}

		return (
			<div className="Color" style={{backgroundColor: `#${color}`}}>
				<small>#</small>{color}
			</div>
		);
	}
}
 
export default Color;