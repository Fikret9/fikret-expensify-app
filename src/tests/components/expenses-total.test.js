 
import getExpensesTotal from '../../components/expensesTotal';
import expenses from '../fixtures/expenses';


test('should render total of 0 for empty array',()=>{    
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
})
test('should render total of expense list',()=>{    
    const total = getExpensesTotal([expenses[0]]); 
    expect(total).toBe(195);
})

test('should render total of 0 for empty array',()=>{    
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
})
