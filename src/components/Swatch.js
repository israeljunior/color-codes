import React from 'react';
import TinyColor from 'tinycolor2';

class Swatch extends React.Component {
	constructor(props) {
		super(props);

		this.setColors = this.setColors.bind(this);
	}

	setColors() {
		var tinycolor = TinyColor(this.props.hex);

		// Main colors
		const RGB = tinycolor.toRgbString();
		const HSL = tinycolor.toHslString();		
		
		// Append to state
		this.setState({
			hex: this.props.hex,
			rgb: RGB,
			hsl: HSL
		})
	}

	componentWillMount() {
		this.setColors()
	}

	componentDidUpdate(prevProps) {
		if (this.props !== prevProps) {
			this.setColors();
		}
	}

	render() { 
		return (
			<div className="Swatch">
				<h2 className="Swatch__header">
					<small>#</small>{this.props.hex}
				</h2>

				<div className="Swatch__colors" style={{backgroundColor: `#${this.state.hex}`}}>
					<span style={{color: `#${this.state.hex}`}}>
						<h6>HEX</h6>
						{`#${this.state.hex}`}
					</span>

					<span style={{color: `#${this.state.hex}`}}>
						<h6>RGB</h6>
						{this.state.rgb}
					</span>

					<span style={{color: `#${this.state.hex}`}}>
						<h6>HSL</h6>
						{this.state.hsl}
					</span>
				</div>
			</div>
		);
	}
}
 
export default Swatch;