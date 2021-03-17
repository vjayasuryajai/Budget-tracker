import React , {useContext}from 'react'
import { TiDelete } from 'react-icons/ti';
import    {AppContext} from'./ExpenseContext'

const  ExpensesItem =(props) =>{



    const {dispatch} = useContext(AppContext)
    const handleDispense = () => {

     dispatch({

            type: 'DELETE_EXPESNE',
            payload : props.id,
         });}

    return (
        
          <li key={props} className ="list-group-item  d-flex justify-content-between align-items-center">
                <p>{props.name}</p>
                <div>
                <span className='badge badge-primary badge-pill mr-3'>
					£{props.cost}
				</span>
				<TiDelete    size='1.5em'  onClick={handleDispense}></TiDelete>
			</div>
            </li>
            
            ) 
        
    
}

export default ExpensesItem

