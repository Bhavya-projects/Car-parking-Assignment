import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingTable from './BookingTable';
import BookingList from './data';
import FilterColor from './FilterColor';

function App() {
    const [booking, setBooking] = useState(BookingList);
    const [filterColor, setFilterColor] = useState(" ");
   
    const srcColor = (srchValue) => {
      setFilterColor(srchValue);
    }
    const deleteSlot = id => setBooking(booking.filter(booked => booked.id !== id));

    const addSlot = booked => {
        booked.id = booking.length + 1;
        setBooking([...booking, booked]);
      }
    
    return (
      <div className="container">
        <div className='detail'>
        <h3 className='text-center my-5'>Parking Lot Booking</h3>
        <div className="row p-5">
          <div className="col-6">
            <h4 className='text-center my-2'>Lot Booking</h4>
            <BookingForm addNewSlot={addSlot} />
          </div>
          <div className="col-6">
            <h4 className='text-center my-2'>Booking Detail</h4>
            <FilterColor filterValue = {filterColor} showColor ={srcColor}/>
            <BookingTable filterValue = {filterColor} bookedSlot={booking} deleteSlot={deleteSlot} />
          </div>
        </div>
      </div>
      </div>
    )
}

export default App;
