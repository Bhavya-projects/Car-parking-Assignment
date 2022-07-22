import React, {useState} from 'react';

const BookingForm = (props) => {

    const initBooking = {id: null,color:'', name: '', contact: ''};

    const [booking, setBooking] = useState(initBooking);

    const handleChange = e => {
        const {name, value} = e.target;
        setBooking({...booking, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ( booking.color && booking.name && booking.contact) {
           handleChange(e, props.addNewSlot(booking));
        }
    }

    return (
        <form className='d-flex flex-column'>
            <label>Car Color</label>
            <input className="u-full-width mb-2" type="text" value={booking.color} name="color" onChange={handleChange} />
            <label>Owner Name</label>
            <input className="u-full-width mb-2" type="text" value={booking.name} name="name" onChange={handleChange} />
            <label>Contact Number</label>
            <input className="u-full-width mb-2" type="number" value={booking.contact} name="contact" onChange={handleChange} />
            <button className="button-primary bookingBtn mt-1" type="submit" onClick={handleSubmit} >Book Slot</button>
        </form>
    )
}

export default BookingForm;