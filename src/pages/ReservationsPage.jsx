import { useEffect } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"

const ReservationsPage = () => {

const [reservations, getReservations, , deleteReservation] = useCrud()

useEffect(() => {
  getReservations('/bookings')
}, [])

console.log(reservations);


  return (
    <div>
      <h2 className="reservation__title">Reservations</h2>
      <div>
        {
          reservations?.map( reserve => (
            <ReserveCard 
              key={reserve.id}
              reserve={reserve}
              deleteReservation={deleteReservation}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ReservationsPage