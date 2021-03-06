import 
 { startEditExpense, 
  startSetExpenses,
  startRemoveExpense,
  setExpenses,
  addExpense,
  startAddExpense,
  editExpense,
  removeExpense}
   from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
  const expensesData = {};
  expenses.forEach(({id,description,note,amount,createdAt})=>{
    expensesData[id] = {description,note, amount, createdAt};
  })
  database.ref('expenses').set(expensesData).then(() => done())

})

test('should  remove expense from firebase',(done)=> {
  const store = createMockStore();
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({id})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value').then((snapshot)=>{
      expect(snapshot.val()).toBeFalsy();
      done();
    })
  })
    ;

})

test('should setup remove expense action object',()=> {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
  })
})


test('should  edit expense in firebase',(done)=> {
  const store = createMockStore();
  const id = expenses[0].id;
  const updates = {amount: 215045};
  store.dispatch(startEditExpense(id,updates)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`expenses/${id}`).once('value')
          .then((snapshot)=>{
               expect(snapshot.val().amount).toBe(updates.amount);
               done();
          })
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

test('should setup add expense action object with provided values',( )=>{
  
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense: expenses[2] 
  })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000
    };
  
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });
  

test('should add expense with defaults to db and store',(done)=>{
  const store = createMockStore({});
  const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note : 'this is better',
      createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(()=>{
      const actions = store.getActions();
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    }) ;
    database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    }) 
  })      
});
  
test('should setup add expense action object with provided values',( )=>{
  
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2] 
    })
  });
  
  test('should add expense to database and store', (done) => {
      const store = createMockStore({});
      const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
      };
    
      store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
            id: expect.any(String),
            ...expenseData
          }
        });
    
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
    });
    
  
  test('should add expense with defaults to db and store',(done)=>{
    const store = createMockStore({});
    const expenseData = {
         description:'',
        note:'',
        amount:0,
        createdAt:0
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toEqual({
          type: 'ADD_EXPENSE',
          expense: {
              id: expect.any(String),
              ...expenseData
          }
      }) ;
      database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) =>{
        expect(snapshot.val()).toEqual(expenseData);
          done();
      }) 
    })      
  }); 

  test('should setup setexpense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
  })


  test('should set expenses from firebase', ()=>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      })
      done();
    });
    
  })
  