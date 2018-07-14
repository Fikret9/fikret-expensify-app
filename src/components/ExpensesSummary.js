import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expensesTotal'; 
import {Link} from 'react-router-dom';


  export const ExpensesSummary = ({expenseCount,expensesTotal}) =>{
       const formattedExpensesTotal = numeral(expensesTotal/1000).format('$0.0.00');     
       return (
      <div className="page-header">
       <div className="content-container">
       <h1 className="page-header__title">
        Viewing <span>{expenseCount}</span> expenses totaling <span>{formattedExpensesTotal}</span>        
        <div className="'page-header__actions"> 
        <Link className="button" to="/create"> Add Expense</Link>
        </div>
       </h1>        
       </div>
      </div>
       )
  }


  const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses,state.filters); 
    return {
      expenseCount: visibleExpenses.length,
      expensesTotal: getExpensesTotal(visibleExpenses)
    } 
  }; 
  
  export default connect(mapStateToProps)(ExpensesSummary);
  