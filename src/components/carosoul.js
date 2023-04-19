import React from 'react'

const carosoul = () => {
    return (
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true" style={{height:600,width:600 , padding:20}}>
            <div class="carousel-inner">
                <div class="carousel-item active" >
                    <img src="https://jugnoo.io/wp-content/uploads/2022/03/cab-booking-software-2-1024x698.jpg" class="d-block w-100" alt="..."  style={{height:500,width:500}}/>
                </div>
                <div class="carousel-item" >
                    <img src="https://jugnoo.io/wp-content/uploads/2022/03/cab-booking-software-1-1024x819.jpg" class="d-block w-100" alt="..." style={{height:500,width:500}} />
                </div>
                <div class="carousel-item" >
                    <img src="https://neetable.com/img/solutions/taxi-booking-app-development/taxi-booking-banner.png" class="d-block w-100" alt="..."  style={{height:500,width:500}}/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default carosoul
