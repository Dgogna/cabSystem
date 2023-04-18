import react,{useState} from "react";
import CabContext from "./cabContext"

const CabState=(props)=>{

    const [cabs,setCabs] = useState(["car1","car2"]);

    // create a booking 

    const do_booking=async(email,source,destination,cab_type,finishing_time)=>{
        const response = await fetch("http://localhost:5000/booking/create", {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,source,destination,cab_type,finishing_time}) 
          });
          const json=await response.json();
        //   console.log(json);
    }

    // all available cabs
    const getCabs=async()=>{
        const response = await fetch("http://localhost:5000/cab/available", {
            method: 'GET', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            }
          });
    
          const cabs=await response.json();
        //   console.log(cabs);
          const valid_cabs=[];
          for (var i=0;i<cabs.length;i++) {
            // console.log(cabs[i]);
            if(cabs[i].bookings.length >0){
                var last= cabs[i].bookings.length -1;
                let another=cabs[i].bookings[last];
                
                // const anyTime = cabs[i].bookings[last];
                const currentTime = new Date();
                var lastTime = new Date(another);
                
                // console.log(currentTime);
                // console.log(lastTime);
                if(currentTime.getTime() <= lastTime.getTime()){
                    // console.log(cabs[i]);
                    delete cabs[i];
                }
            }
         }
          setCabs(cabs);
    }


    return (
        <CabContext.Provider value={{cabs,getCabs,do_booking}}>
            {props.children}
        </CabContext.Provider>
    )
};


export default CabState;