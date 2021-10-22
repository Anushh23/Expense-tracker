import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
const Expenses = (props) => {

  const [filteredYear,setFilteredYear]=useState('2021');
  const filterChangeHandler=(selectedYear)=>{
           setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense=>{
    return new Date(expense.date).getFullYear().toString()=== filteredYear
  })

  let expenseData= <p className="text-center text-white">No expense found.</p>
  if(filteredExpenses.length>0){
    expenseData= filteredExpenses.map((expense)=>
    <ExpenseItem 
             key={expense.id}
             title={expense.title}  
             amount={expense.amount} 
             date={expense.date}              
   />)
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseChart expenses={filteredExpenses}/>
      {expenseData}
    </Card>
  );
}

export default Expenses;