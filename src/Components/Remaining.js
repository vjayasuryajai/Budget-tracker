import React, {useContext} from 'react'


import { AppContext } from './ExpenseContext';

function Remaining() {


    const { Expense, budget } = useContext(AppContext);

    const totalExpenses = Expense.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);


    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span> Remaning : ${budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining
