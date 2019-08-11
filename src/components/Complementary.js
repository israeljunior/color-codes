import React from 'react';
import TinyColor from 'tinycolor2';

// Components
import Color from '../components/Color.js'

class Complementary extends React.Component {
	constructor(props) {
		super(props);

		this.setColors = this.setColors.bind(this);
	}
	
	setColors() {
		var tinycolor = TinyColor(this.props.hex);
		
		// Complementary
		const TRIAD = tinycolor.triad();
		const COMPLEMENT = tinycolor.complement().toHexString();
		const MONOCHROMATIC = tinycolor.monochromatic();

		this.setState({
			triad: TRIAD,
			complement: COMPLEMENT,
			monochromatic: MONOCHROMATIC
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
			<>
				<div className="PaletteList PaletteList--circular">
					<div className="Palette">
						<h6 className="Palette__header">Complementar</h6>
						<div className="Palette__colors">
							<Color color={this.props.hex}/>
							<Color color={this.state.complement}/>
						</div>
					</div>

					<div className="Palette">
						<h6 className="Palette__header">Tríade</h6>
						<div className="Palette__colors">
							{this.state.triad.map((item, index) => {
								return <Color key={index} color={item.toHexString()}/>
							})}
						</div>
					</div>
				</div>

				<div className="PaletteList PaletteList--circular">
					<div className="Palette">
						<h6 className="Palette__header">Escala monocromática</h6>
						<div className="Palette__colors">
							{this.state.monochromatic.map((item, index) => {
								return <Color key={index} color={item.toHexString()}/>
							})}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Complementary;