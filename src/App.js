import { Fragment } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import Header from './components/views/header'
import TimeLine from './pages/TimeLine'
import NotFound from './pages/404'
import Article from './pages/Article'

function App() {
  return (
		<Fragment>
			<BrowserRouter>
				<Header />
				<Switch>
					<Redirect from="/" to="/timeline/recommend" exact></Redirect>
					<Route path="/timeline/recommend" component={TimeLine}></Route>
					<Route path="/article" component={Article}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</BrowserRouter>
		</Fragment>
	)
}

export default App;
