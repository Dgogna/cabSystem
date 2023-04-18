import React, { useContext, useState } from 'react'
import Taxis from './Taxis';
import cabContext from '../context/cabContext';
import Cab from "./cab";


const ChooseLocation = () => {


    const [location, setLocation] = useState({ email: "", source: "", destination: "" });
    const [time, setTime] = useState(0);
    const [cab, setCab] = useState();

    const context = useContext(cabContext);
    const { cabs, getCabs, do_booking } = context

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

        console.log("Time Taken to Go from " + location.source + " " + location.destination + " is " + cost + " mins.");

        // console.log(cabs);
        setTime(cost);
        getCabs();
        setShow("true");

    }

    const confirm_book = (e) => {
        e.preventDefault();
        console.log("your booking is confirmed");
        console.log(time);
        let dt = new Date();
        dt = (new Date(dt.getTime() + time * 60 * 1000));
        console.log(dt);
        //  ut.innerText = "Updated Time : " + dt.toLocaleTimeString();
        setShow("false");
        console.log(cab);
        do_booking(location.email, location.source, location.destination, cab, dt);
        setLocation({ email: "", source: "", destination: "" })
    }

    const onChange = (e) => {
        setLocation({ ...location, [e.target.name]: e.target.value })
    }

    return (
        <div className='container'>
            now i will be choosing the location

            <form>
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

                <button type='Submit' onClick={handleClick}> Find Taxi </button>
            </form>

            {/* {show==="true" && <Taxis />} */}
            {/* { show==="true" && cabs.map((cab) => {
                    return <h4>{cab.name + "    "+ (cab.charge * time)}</h4>;
                })} */}
            {show === "true" &&
               <div>yoy will reach the destination in {time} minutes</div>
            }
            {show === "true" && cabs.map((cab) => {
                return (
                    <div>
                        
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="cabs" value={cab.name} id={cab.name}
                                onChange={e => setCab(e.target.value)} />
                            <label className="form-check-label" htmlFor={cab.name} />
                            {cab.name}
                        </div>
                    </div>
                );
            })}
            {/* <div className="form-check">
                <input className="form-check-input" type="radio" name="cabs" value="car 1" id="cab1"
                    onChange={e => setCab(e.target.value)} />
                <label className="form-check-label" htmlFor="cab1" />
                car 1
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="cabs" value="car 2" id="cab2"
                    onChange={e => setCab(e.target.value)} />
                <label className="form-check-label" htmlFor="cab2">
                    car2
                </label>
            </div> */}
            {show === "true" &&
                <button type='Submit' onClick={confirm_book}> Confirm Your Booking </button>
            }


        </div>
    )
}

export default ChooseLocation
