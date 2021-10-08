import { Fragment } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import Header from './components/views/header'
import TimeLine from './pages/TimeLine'
import NotFound from './pages/404'
import Article from './pages/Article'
import ButtonDemo from './pages/Article/ButtonDemo'
import PagerDemo from './pages/Article/PagerDemo'

function App() {
  return (
		<Fragment>
			<BrowserRouter>
				<Header />
				<Switch>
					<Redirect from="/" to="/index" exact></Redirect>
					<Route path="/index" component={TimeLine}></Route>
					<Route path="/cascader-demo" component={Article}></Route>
					<Route path="/button-demo" component={ButtonDemo}></Route>
					<Route path="/pager-demo" component={PagerDemo}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</BrowserRouter>
		</Fragment>
	)
}

export default App;
