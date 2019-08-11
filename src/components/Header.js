import React from 'react';

class Header extends React.Component {
	render() { 
		return (
			<div className="Header">
				<nav className="Menu">
					<div className="Menu__item Menu__item--active">
						HTML
					</div>
					<div className="Menu__item">
						Material
					</div>
					<div className="Menu__item">
						Flat
					</div>
					<div className="Menu__item">Web 
						Safe
					</div>
				</nav>
			</div>
		);
	}
}
 
export default Header;