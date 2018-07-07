import React from 'react'; 
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFound';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>    
    <div>      
    <Switch>
      <PublicRoute path="/" component={LoginPage} exact={true}/>
      <PrivateRoute path="/create" component={AddExpensePage}/>
      <PrivateRoute path="/edit/:id" component={EditExpensePage}/>         
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>      
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
);

export default AppRouter;

