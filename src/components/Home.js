import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChooseLocation from './ChooseLocation'
// import Carosoul from './carosoul'


const Home = () => {

    const Navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        Navigate("/bookings")
    }

    return (

        <div class="container">
            <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            
                <h1 class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                    
                    <h1 >Book a Cab Here</h1>
                </h1>

                <ul class="nav nav-pills">
                    <button type="button" class="btn btn-dark" onClick={handleClick} style={{ height: 50 }}>Track Bookings</button>
                    {/* <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Track Bookings</a></li> */}

                </ul>
            </header>

            <div class="d-flex bd-highlight">
                <div class="p-2 w-100 bd-highlight"><ChooseLocation /></div>
                {/* <div class="p-2 w-100 bd-highlight" ><Carosoul></Carosoul></div> */}
            </div>

        </div>

        // <div className='container '>
        //     <h1 style={{textAlign:'center',padding:10}}>Book a Cab Here</h1>



        //     <div class="d-flex bd-highlight">
        //         <div class="p-2 w-100 bd-highlight"><ChooseLocation /></div>
        //         {/* <div class="p-2 w-100 bd-highlight" ><Carosoul></Carosoul></div> */}
        //     </div>

        //     {/* <ChooseLocation /> */}
        // </div>
    )
}

export default Home
