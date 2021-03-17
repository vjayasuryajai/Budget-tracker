import React, { useContext } from 'react';
import    {AppContext} from'./ExpenseContext'

function Budget() {

    const {budget,dispatch} =useContext(AppContext)

    
    

    return (
        <div  className ="alert alert-primary">

       
            <span>Budget : {budget}</span>
            
             
        </div>
    )
}

export default Budget
