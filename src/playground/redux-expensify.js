import { createStore, combineReducers } from 'redux';

//ADD_EXPENSE
const addExpense = () =>({
  type: 'ADD_EXPENSE',
  expense: {
    id: 
  }
})

//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const exprensesReducerDefaultState = [];
const expensesReducer = (state = exprensesReducerDefaultState, action) =>{
  switch (action.type){
    default:
      return state;
  }
};

//Filter Reducer

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) =>{
  switch (action.type){
    default:
      return state;
  }
};
//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

console.log(store.getState());


const demoState = {
  expenses: [{
    id: 'aflkja;ldjfa;l',
    description: 'January Rent',
    note: 'this is the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}
