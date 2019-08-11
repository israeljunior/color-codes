import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Color from './pages/Color'

// Components
import Sidebar from './components/Sidebar'

class App extends React.Component {
	render() {
		return (
			<div className="App">
				
				<Router>
					<Sidebar/>
	
					<main className="Main">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/:hex" component={Color} />
						</Switch>
					</main>
				</Router>
			</div>
		);
	}
}

export default App;
