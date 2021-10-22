import React,{ useState, useEffect} from 'react';
import './App.css';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Expenses from './Expenses';
import NewExpense from './NewExpense';

const Dummy_expenses = [
  {
    id: 'e1',
    title: 'Tissue Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {

  //Getting data from local storage
  const getExpensesFromLocalStorage=()=>{
    let list= localStorage.getItem('expenses');
    if(list)
    {
       return JSON.parse(list);
    }
    else
    {
      return Dummy_expenses;
    }
  }
  const [expenses,setExpenses]= useState(getExpensesFromLocalStorage());
  const addExpense =(newExpense)=>{
      console.log(newExpense);
      setExpenses(prevExpenses=>{
        return [newExpense,...prevExpenses];
      })
  }
 
  // using local storage
  useEffect(()=>{
    localStorage.setItem('expenses',JSON.stringify(expenses));
  },[expenses])
  return (
    <div className="App">
      <NewExpense onAddingExpense={addExpense}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;