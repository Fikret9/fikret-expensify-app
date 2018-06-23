 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {removeExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


store.dispatch(addExpense({description:'Water bill',amount:50000, createdAt: 4500}));
console.log('state',store.getState());
store.dispatch(addExpense({description:'Gas bill',amount:2000, createdAt: 1000}));
console.log('state',store.getState()); 

store.dispatch(addExpense({description:'Rent bill',amount:109500,note:'test note'}));
console.log('state',store.getState()); 
 

store.dispatch(setTextFilter(''));   
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters); 
console.log('visible',visibleExpenses);


const jsx = (
    <Provider store={store}>
     <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));

