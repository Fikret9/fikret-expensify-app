import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expensesTotal'; 


  export const ExpensesSummary = ({expenseCount,expensesTotal}) =>{
       const formattedExpensesTotal = numeral(expensesTotal/1000).format('$0.0.00');     
       return (
      <div>
       <h2>
        Viewing {expenseCount} expenses totaling {formattedExpensesTotal}        
       </h2>        
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
  