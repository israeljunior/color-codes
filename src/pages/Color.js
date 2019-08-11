import React from 'react';

// Components
import Swatch from '../components/Swatch'
import Complementary from '../components/Complementary'

class Color extends React.Component {
	render() { 
		return (
			<div className="View">
				<section>
					<Swatch hex={this.props.match.params.hex}/>
				</section>

				<section>
					<Complementary hex={this.props.match.params.hex}/>
				</section>

				{/* <section>
					<h2>Cores da ColourLovers</h2>
					<Palettes hex={this.props.match.params.hex}/>
				</section> */}

				<section className="Sample">
					<div>
						<h3 style={{color: `#${this.props.match.params.hex}`}}>
							Exemplo
						</h3>
						
						<p style={{color: `#${this.props.match.params.hex}`}}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
					</div>

					<div style={{backgroundColor: '#000000'}}>
						<h3 style={{color: `#${this.props.match.params.hex}`}}>
							Exemplo
						</h3>
						
						<p style={{color: `#${this.props.match.params.hex}`}}>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
					</div>
				</section>
			</div>
		);
	}
}
 
export default Color;