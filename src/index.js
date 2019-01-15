import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route path={`${process.env.PUBLIC_URL}/`} component={Home}/>
			  <Route path={`${process.env.PUBLIC_URL}/request`} component={Request}/>
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
