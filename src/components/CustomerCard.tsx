import React from 'react'
import { useDispatch } from "react-redux";
import { useState} from 'react'
import {addFoodToCustomer} from '../features/customerSlice'

interface CustomerCardTypes {
  id: string
  name: string
  food: string[]
}

const CustomerCard = ({name, id, food}: CustomerCardTypes) => {
  const dispatch = useDispatch()

  const [customerFoodInput, setCustomerFoodInput] = useState('')
  return (
    <div className="customer-food-card-container">
      <h5>Customer : {name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map(food => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput}
                  onChange={e => setCustomerFoodInput(e.target.value)}          
            
          />
          <button onClick={() => {
            if(!customerFoodInput) return 
            dispatch(addFoodToCustomer({
              id,
              food: customerFoodInput
            }))
            setCustomerFoodInput('')
          }}
            
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard