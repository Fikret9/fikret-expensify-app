
const expensesReducerDefaultState = [];
export default  (state=expensesReducerDefaultState, action) => {
//const expensesReducer = (state=expensesReducerDefaultState, action) => {
   switch (action.type){
     case  'ADD_EXPENSE':
       return  [ ...state, action.expense];
     case  'REMOVE_EXPENSE':
       //return state.filter(({ id }) => id !== action.id);
       //return     state.filter(({id})=> {             id !== action.id;     })     
       return state.filter(({ id }) => id !== action.id);

      case  'EDIT_EXPENSE':
       return state.map((expense) => {            
            console.log(expense);
            if (expense.id === action.id) {                
                return {
                    ...expense,
                    ...action.updates
                };
            }
            else{
                return expense;
            }
        });      
     
        case  'SET_EXPENSES':
         return action.expenses;      

     default:
       return state;
   }
};

  