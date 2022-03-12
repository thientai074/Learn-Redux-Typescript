import CustomerCard from './components/CustomerCard'
import ReservationCard from './components/ReservationCard'
import './App.css';
import { RootState} from './app/store'
import { useSelector, useDispatch} from 'react-redux'
import { useState} from 'react'
import { addReservation } from "./features/reservationSlice";

function App() {
  const [ reservationNameInput, setReservationNameInput] = useState('')

  const dispatch = useDispatch()

  const reservations = useSelector((state: RootState) => state.reservations.value)

  const customers = useSelector((state: RootState) => state.customer.value)

  const handleAddReservations = () => {
    if(!reservationNameInput) return ;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }

  
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard key={name} name={name} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} 
                    onChange={e => setReservationNameInput(e.target.value)}
            
            />
            <button onClick={handleAddReservations} >               
                 Add
            </button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer => (
              <CustomerCard
                id={customer.id}
                key={customer.id}
                name={customer.name}
                food={customer.food} />
          ))}
        </div>
      </div>
    </div>
 
  );
}

export default App;
