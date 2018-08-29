import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpense = (
  {
    description ='',
    amount =0,
    note = '',
    createdAt=0
  }={}
) =>({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    amount,
    note,
    createdAt,
  }
});

//REMOVE_EXPENSE
const removeExpense = (
  {
    id
}
={}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

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
    case 'ADD_EXPENSE':
      return [
          ...state,
          action.expense
      ];
    case 'REMOVE_EXPENSE':
        return state.filter(({ id })=>
          id !== action.id
        );
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

store.subscribe(()=>{
  console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100}));

const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 300}));

store.dispatch(removeExpense({ id: expense1.expense.id }));

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


const user ={
  name: 'Jen',
  age: 24
}


console.log({
  ...user
})
