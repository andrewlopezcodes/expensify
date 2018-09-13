import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', ()=>{
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});


test('should remove expense by id', () =>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove if id not found', () =>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () =>{
  const expense = {
    id: '4',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 80000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () =>{
  const note = "we had a great time";
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
    note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].note).toBe(note);
});

test('should not edit expense if expense not found', () =>{
  const note = "we had a great time";
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-9',
    updates: {
    note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
