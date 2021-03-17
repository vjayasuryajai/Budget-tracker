import React, { useContext} from 'react'
import    {AppContext} from'./ExpenseContext'

import ExpensesItem from './ExpensesItem'

 const Expenses = () => {

  const {Expense} = useContext(AppContext)

 
  return (

<ul class="list-group">
    {
   Expense.map( (data) =>

   <ExpensesItem  id={data.id} name={data.name} cost={data.cost}/>
   )
      

    }
        
            </ul>
        )
    
}

export default Expenses
