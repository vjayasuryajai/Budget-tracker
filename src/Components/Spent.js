import React, { useContext } from 'react';
import { AppContext } from './ExpenseContext';

const  Spent= () => {

    const {Expense} = useContext(AppContext)

    const totalExpenses = Expense.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

    return (
        <div className ="alert alert-danger">
            <span> Spent : ${totalExpenses}</span>
        </div>
    )
}

export default Spent
