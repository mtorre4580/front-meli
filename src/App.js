import './App.scss';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ItemDetail from './containers/DetailContainer';
import ItemList from './containers/ResultsContainer';
import Searchbox from './containers/SearchboxContainer';
import NotFound from '../src/components/commons/notfound/notfound';

const App = () => (
  <Fragment>
    <Searchbox />
    <Switch>
      <Route exact path='/' />
      <Route exact path='/items' component={ItemList} />
      <Route exact path='/items/:id' component={ItemDetail} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default withRouter(connect(null, { replace })(App));
