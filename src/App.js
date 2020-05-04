import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import CustomersContainer from './Containers/CustomersContainer';
import CustomContent from './Containers/CustomContent';
import './App.css';


class App extends Component{

  renderHome = () => <Home />
  renderCustomerListContainer = () => <h2>Customer List Container</h2>;

  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={this.renderHome} />
          <Route exact path="/customers" component={CustomersContainer} />
          <Switch>
            {/*<Route path="/customers/nuevo" component={this.renderCustomerNewContainer()} />*/}
            <Route 
              path="/customers/:dni" 
              render={props => <CustomContent dni={props.match.params.dni} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;