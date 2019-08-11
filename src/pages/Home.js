import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (
			<div style={{'display':'flex', 'justify-content':'center', 'align-items':'center', 'height':'100%'}}>
				<span>Selecione uma cor</span>
			</div>
		);
	}
}
 
export default Home;