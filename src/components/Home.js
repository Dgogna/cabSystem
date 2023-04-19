import React from 'react'
import ChooseLocation from './ChooseLocation'
import Carosoul from './carosoul'


const Home = () => {
    return (
        <div className='container '>
            <h1 style={{textAlign:'center',padding:10}}>Book a Cab Here</h1>
            <div class="d-flex bd-highlight">
                <div class="p-2 w-100 bd-highlight"><ChooseLocation /></div>
                {/* <div class="p-2 w-100 bd-highlight" ><Carosoul></Carosoul></div> */}
            </div>

            {/* <ChooseLocation /> */}
        </div>
    )
}

export default Home
