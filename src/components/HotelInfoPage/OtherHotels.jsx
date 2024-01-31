import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import HotelCard from "../HomePage/HotelCard"
import '../HomePage/styles/HomePage.css'

const OtherHotels = ({ cityId, hotelId }) => {

  const url = `https://hotels-api.academlo.tech/hotels?cityId=${cityId}`
  const [hotels, getHotels] = useFetch(url)

  useEffect(() => {
    if (cityId) {
      getHotels()
    }
  }, [cityId])

  console.log(hotels);

  return (
    <>
    <h2 className="otherHotel__title">Other Hotels in {hotels?.results[0].city.name}</h2>
    <div className="otherHotel__container__card">
      
      <div className="Hotel__card__container">

        {
          hotels?.results.filter(hotelInfo => hotelInfo.id !== hotelId).map(hotelInfo => (
            <div className="hotel-container" key={hotelInfo.id}>
              <div className="hotel-card-wrapper" >
                <HotelCard
                  
                  hotel={hotelInfo}
                />
              </div>
            </div>
          ))
        }

      </div>
    </div>
    </>
  )

}

export default OtherHotels