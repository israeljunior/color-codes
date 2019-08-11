import React from 'react';

class Palettes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hex: this.props.hex,
			data: []
		}
	}

	componentDidMount() {
		let colourLovers = 'http://www.colourlovers.com/api/palettes?hex=' + this.state.hex + '&format=json';

		fetch(colourLovers)
			.then(response => response.json())
			.then(data => {
				if(data) {
					this.setState({data: data})
				}
			})
	}

	render() { 
		return (
			<div className="PaletteList">
				{this.state.data.map((item, index) => {
					return (
						<div key={index} className="Palette">
							<div className="Palette__header">
								<h3>{item.title}</h3>
							</div>

							<div className="Palette__colors">
								{item.colors.map((color_item, color_index) => {
									return (
										<span style={{backgroundColor: `#${color_item}`}}key={color_index}>
											{/* {color_item} */}
										</span>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		);
	}
}
 
export default Palettes;