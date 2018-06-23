import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({setBy = 1} = {}) => ({
    type: 'SET',
    setBy
})

const resetCount = ({resetBy=0}={}) =>({
    type: 'RESET',
    resetBy
})



const countReducer = (state = {count: 0}, action)=>{    
    switch(action.type){
        case 'INCREMENT': 
          return {
            count: state.count + action.incrementBy
        }
        case 'DECREMENT':        
          return {
            count: state.count - action.decrementBy
        }
        case 'RESET':
          return {
            count: action.resetBy
        }
        case 'SET':
        return {
          count: action.setBy
        }

        default: 
          return state;
    }
}


const store = createStore(countReducer);

store.subscribe(()=>{
  console.log('state',store.getState());
});
 
store.dispatch(incrementCount({incrementBy: 8}) ); 
store.dispatch(resetCount()); 
store.dispatch(decrementCount());
store.dispatch(resetCount({resetBy:10}));
store.dispatch(decrementCount({decrementBy: 17})); 
store.dispatch(setCount({setBy:500}));

 