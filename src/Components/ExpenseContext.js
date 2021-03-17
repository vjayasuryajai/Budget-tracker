
import {createContext,useReducer} from 'react'

const AppReducer = (state, action) => {
	switch (action.type) {
  case  'ADD_EXPENSE' :
      return{

        ...state,
        Expense : [...state.Expense,action.payload]
      }

      case  'DELETE_EXPESNE' :
      return{

        ...state,
        Expense :   state.Expense.filter((expense) => expense.id !== action.payload),
      }

		default:
			return state;
	}
};



const InitialState ={


    Salary: 3000,
    Expense : [],

}

export const AppContext = createContext();


export const AppProvider = (props) => {

    const [state,dispatch] = useReducer(AppReducer,InitialState)


    return(

        <AppContext.Provider    
        value={{
budget: state.Salary,
Expense: state.Expense,
dispatch

        }}
        >

       
        {props.children}
        </AppContext.Provider>

    )
}