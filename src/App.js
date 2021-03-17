import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './Components/Budget'
import Remaining from './Components/Remaining'
import Spent from './Components/Spent'
import Expenses from './Components/Expenses'
import Form from './Components/Form'
import Chart from './Components/Chart'
import {AppProvider} from './Components/ExpenseContext'

function App() {
  return (
    <AppProvider>
    <div className ="container">
       <h1 className ="mt-3">Budget Tracker</h1>
         <div  className ="row mt-3">
            <div className ="col-sm">
               <Budget/>
             </div>

             <div className ="col-sm">
               <Remaining />
             </div>

             <div className ="col-sm">
                <Spent />
              </div>
          </div>
         

          <h3 className='mt-3'>Add Expenses</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <Form />
            </div>
            </div>


          <h3 className='mt-3'>Expenses</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<Expenses />
				</div>
        </div>

        

			
          
    </div>
    </AppProvider>
  )
}

export default App
