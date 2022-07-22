import React from 'react';


const BookingTable = (props) => {
    return (
        <div>
        <table>
            <thead>
                <tr className='border-bottom'>
                    <th>Slot Number</th>
                    <th>Registratio Number</th>
                    <th>Car Color</th>
                    <th>Owner Name</th>
                    <th>Contact Number</th>
                </tr>
            </thead>
            <tbody>
                { props.bookedSlot.length > 0 ? (
                    props.bookedSlot.map(user => {
                        const {id,color, name, contact} = user;
                        const filterValue = props.filterValue;
                        const colorValue = user.color;
                        if((!filterValue) || (colorValue.indexOf(filterValue) !== -1)){
                        return (
                            <tr key={id} className='border-bottom py-2'>
                                <td>{id}</td>
                                <td>{id * 16}</td>
                                <td>{color}</td>
                                <td>{name}</td>
                                <td>{contact}</td>
                                <td>
                                <button className='bookingBtn my-2' onClick={() => props.deleteSlot(id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
        </div>
    )
}

export default BookingTable;