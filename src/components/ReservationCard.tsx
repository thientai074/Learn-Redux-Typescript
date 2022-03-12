import React from 'react'
import { v4 as uuid } from "uuid";
import {useDispatch} from 'react-redux'
import { removeReservation} from '../features/reservationSlice'
import { addCustomer} from '../features/customerSlice'

interface ReservationCardTypes {
  name: string
  index: number
}
const ReservationCard = ({name, index}: ReservationCardTypes) => {
  const dispatch = useDispatch()
  return (
    <div
      className="reservation-card-container" onClick={
        ()=> {
          dispatch(removeReservation(index));
          dispatch(addCustomer({
            id: uuid(),
            name, 
            food: []
          }))
        }}>   
      <p>{name}
      
      </p>      
    </div>
  )
}

export default ReservationCard