import React, { useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Taxis from './Taxis';
import cabContext from '../context/cabContext';
import Cab from "./cab";
import Carosoul from './carosoul';


const ChooseLocation = () => {

    const ref = useRef(null);
    const closeRef = useRef(null);

    const [location, setLocation] = useState({ email: "", source: "", destination: "" });
    const [time, setTime] = useState(0);
    const [cab, setCab] = useState();
    const [updated_cab, setUpdated_cab] = useState({ id: "", name: "", charge: "" })

    const Navigate = useNavigate();

    const context = useContext(cabContext);
    const { cabs, getCabs, do_booking, updating_cab } = context

    const find_cost = (src, des) => {
        // console.log(src   +" "+des);
        const graph = {
            A: { B: 5, C: 7 },
            B: { A: 5, D: 15, E: 20 },
            C: { A: 7, E: 35, D: 5 },
            D: { B: 15, F: 20, C: 5 },
            E: { C: 35, F: 10, B: 20 },
            F: { D: 20, E: 10 },
        };

        const distances = {};

        // Initialize the distances with the graph
        for (let node in graph) {
            distances[node] = {};
            for (let neighbor in graph) {
                distances[node][neighbor] = graph[node][neighbor] || Infinity;
            }
        }

        // Calculate the shortest distance between every pair of nodes
        for (let k in graph) {
            for (let i in graph) {
                for (let j in graph) {
                    const ikDistance = distances[i][k];
                    const kjDistance = distances[k][j];
                    const ijDistance = distances[i][j];
                    const throughKDistance = ikDistance + kjDistance;

                    if (throughKDistance < ijDistance) {
                        distances[i][j] = throughKDistance;
                    }
                }
            }
        }

        //   console.log(distances);
        //   console.log(distances[src][des]);
        return distances[src][des];

    }

    const [show, setShow] = useState('not_show');
    const handleClick = (e) => {
        e.preventDefault();
        // console.log("the click has been done");
        // console.log(location);

        let cost = find_cost(location.source, location.destination);

        // console.log("Time Taken to Go from " + location.source + " " + location.destination + " is " + cost + " mins.");

        // console.log(cabs);
        setTime(cost);
        getCabs();
        setShow("true");
    }



    const confirm_book = (e) => {
        e.preventDefault();
        const config = {
            Username: "@gmail.com",
            Password: "",
            Host: "smtp.elasticemail.com",
            Port: 2525,
            To: location.email,
            From: "",
            Subject: "Your Booking is Scheduled Succesfully",
            Body: `You Have Succesfully Booked the Cab .
                    Your Pickup Locations is point ${location.source} and Your Drop location is Point ${location.destination}
                    Estimated Time to reach the Destination is ${time} minutes
                    and your Cab name is ${cab} .

                    Hope You Will Enjoy the journey.
            `
        }
        // console.log("your booking is confirmed");
        // console.log(time);
        let dt = new Date();
        dt = (new Date(dt.getTime() + time * 60 * 1000));
        // console.log(dt);
        //  ut.innerText = "Updated Time : " + dt.toLocaleTimeString();
        setShow("false");
        // console.log(cab);
        do_booking(location.email, location.source, location.destination, cab, dt);

        // here we are sending the mail to the user who has done the booking
        // if(window.Email){
        //     window.Email.send(config).then(()=>{alert("email send succesfully")});
        // }


        
        setLocation({ email: "", source: "", destination: "" })
        alert("Your Booking Has Been Confirmed");
    }

    const update_cab = (current_cab) => {
        // e.preventDefault();
        // Navigate("/cab");
        // console.log(current_cab);
        ref.current.click();
        setUpdated_cab({ id: current_cab._id, name: current_cab.name, charge: current_cab.charge })
    }

    const handle_cab_update = (e) => {
        e.preventDefault();
        closeRef.current.click();
        // console.log(updated_cab);
        // console.log("now here the cab eill be updated");
        updating_cab(updated_cab.id, updated_cab.name, updated_cab.charge);
    }

    const onChangeUpdate = (e) => {
        setUpdated_cab({ ...updated_cab, [e.target.name]: e.target.value });
    }

    const onChange = (e) => {
        setLocation({ ...location, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            {/* <h3 style={{ textAlign: "center", padding: 10 }}>Enter the below details to book a cab.</h3> */}

            <div class="d-flex bd-highlight">
                <div class="p-2 w-50 bd-highlight"  >
                <h3 style={{ textAlign: "center", padding: 30 }}>Enter the below details to book a cab.</h3>
                <form style={{ padding: 30 }}>
                <div className="mb-3" style={{marginTop:0}}>
                
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={onChange} value={location.email} />

                </div>
                <div className="mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source" name="source" onChange={onChange} value={location.source} />
                </div>
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destination" name="destination" onChange={onChange} value={location.destination} />
                </div>

                <div class="d-grid gap-1" style={{ padding: 40 }}>
                    <button class="btn btn-dark" type="button" onClick={handleClick}>Find Cab</button>

                </div>
                {/* <button type="button" class="btn btn-outline-dark" onClick={handleClick} style={{textAlign:"center"}}>Find Cab</button> */}
                {/* <button type='Submit' onClick={handleClick}> Find Taxi </button> */}
            </form>
                </div>
            <div >
            <Carosoul></Carosoul>
            </div>
            
            </div>

            {/* <form style={{ padding: 30 }}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={onChange} value={location.email} />

                </div>
                <div className="mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source" name="source" onChange={onChange} value={location.source} />
                </div>
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destination" name="destination" onChange={onChange} value={location.destination} />
                </div>

                <div class="d-grid gap-1" style={{ padding: 40 }}>
                    <button class="btn btn-dark" type="button" onClick={handleClick}>Find Cab</button>

                </div> */}
                {/* <button type="button" class="btn btn-outline-dark" onClick={handleClick} style={{textAlign:"center"}}>Find Cab</button> */}
                {/* <button type='Submit' onClick={handleClick}> Find Taxi </button> */}
            {/* </form>
            <Carosoul></Carosoul> */}


            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Cab</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" autoComplete="off" name="name" onChange={onChangeUpdate} value={updated_cab.name} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="charge" className="form-label">Price /min</label>
                                    <input type="text" className="form-control" id="charge" name="charge" autoComplete="off" onChange={onChangeUpdate} value={updated_cab.charge} />
                                </div>
                                {/* <div className="mb-3">
                                    <label htmlFor="edittag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="edittag" name="edittag" autoComplete="off" onChange={onChange} value={editnote.edittag} />
                                </div> */}

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handle_cab_update} type="button" className="btn btn-primary">Update Cab</button>
                        </div>
                    </div>
                </div>
            </div>




            {show === "true" &&
            <div style={{padding:6,marginLeft:20}}>
                <h3 >You will reach the destination in {time} minutes.</h3>

                <h5>Cabs availabe Right Now.</h5>
                </div>
            }


            <div className='col '>
                <div class="d-flex">
                    {show === "true" && cabs.map((cab) => {
                        return (
                            <>
                                <div class="p-2 flex-fill">
                                    <div class="col">
                                        <div class="card mb-4 rounded-3 shadow-sm">
                                            <div class="card-header py-3">
                                                <h4 class="my-0 fw-normal"><input className="form-check-input" type="radio" name="cabs" value={cab.name} id={cab.name}
                                onChange={e => setCab(e.target.value)} style={{marginRight:12}} />
                            <label className="form-check-label" htmlFor={cab.name} />
                            {cab.name}</h4>
                                            </div>
                                            <div class="card-body">
                                                <h1 class="card-title pricing-card-title">Rs {cab.charge * time}<small class="text-muted fw-light"></small></h1>
                                                <ul class="list-unstyled mt-3 mb-4">
                                                    <li>Price /min is {cab.charge}💵</li>
                                                    <li>Will Reach your Destination in {time} minutes.</li>
                                                    {/* <li>Email support</li>
                                                    <li>Help center access</li> */}
                                                </ul>
                                                <Cab key={cab._id} update_cab={update_cab} cab={cab}></Cab>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                        // <div className='col'>



                        {/* <div class="p-2 flex-fill">Flex item</div>
                            <div class="p-2 flex-fill">Flex item</div> */}
                        {/* </div> */ }
                        {/* <div className="form-check">
                            <input className="form-check-input" type="radio" name="cabs" value={cab.name} id={cab.name}
                                onChange={e => setCab(e.target.value)} />
                            <label className="form-check-label" htmlFor={cab.name} />
                            {cab.name}

                            <p>fair for this cab is {cab.charge * time} rs</p>
                            <Cab key={cab._id} update_cab={update_cab} cab={cab}></Cab>
                            <button type='Submit' onClick={update_cab}> Update_cab </button>
                        </div> */}

                        ;
                    })}
                </div>
            </div>

            {(show === "true") &&
                <button type='Submit' class="w-100 btn btn-lg btn-dark" onClick={confirm_book}> Confirm Your Booking </button>
            }


        </div>
    )
}

export default ChooseLocation
