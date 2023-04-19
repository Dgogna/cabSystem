import React, { useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import cabContext from '../context/cabContext';

const Bookings = () => {

    const context = useContext(cabContext);

    const Navigate=useNavigate();

    const { bookings, get_all_bookings } = context;

    useEffect(() => {
        get_all_bookings();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick=(e)=>{
        e.preventDefault();
        Navigate("/");
    }

    return (
        <div className='container'>
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <h1 class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                    <h1 >All Bookings</h1>
                </h1>

                <ul class="nav nav-pills">
                    <button type="button" class="btn btn-dark" onClick={handleClick} style={{ height: 50 }}>Back To Home</button>
                    {/* <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Track Bookings</a></li> */}

                </ul>
            </header>
            <div class="album py-5 bg-body-tertiary">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {bookings.slice(0).reverse().map((booking) => {
                            return (
                                <>
                                    <div class="col">
                                        <div class="card shadow-sm">
                                            <div class="card-header py-3 text-bg-dark border-dark">
                                                <h4 class="my-0 fw-normal">{booking.cab_type}</h4>
                                            </div>
                                            {/* <h2 style={{ margin: "auto" }}>{booking.email}</h2> */}
                                            <div class="card-body">
                                                <ul class="list-unstyled mt-3 mb-4">

                                                    <li>Email:- {booking.email}</li>
                                                    <li>Source:- {booking.source}</li>
                                                    <li>Destination:- {booking.destination}</li>
                                                    {/* <li>Help center access</li> */}
                                                    {new Date(booking.finishing_time).getTime() < new Date().getTime() && <h2 style={{ color: "red" }}>Finished</h2>}
                                                    {new Date(booking.finishing_time).getTime() > new Date().getTime() && <h2 style={{ color: "green" }}>Ongoing</h2>}

                                                </ul>


                                            </div>
                                        </div>
                                    </div>
                                    {/* <h4>{booking.email}</h4> */}
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bookings
