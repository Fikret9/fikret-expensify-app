import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object',()=> {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action object',()=>{
    const updates = {note:  'new note value'};
    const action = editExpense('12345',updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates
    })
})

test('should setup add expense action object with provided values',()=>{
  const expenseData = {    
        description: 'Rent',
        note: 'This was las months rent',
        amount: 109500 ,
        createdAt: 1000
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense: {
          ...expenseData,
          id: expect.any(String)
      }
  })
});

test('should setup add expense action object with default ',()=>{
    const action = addExpense(); 
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0            
        }
    })
});