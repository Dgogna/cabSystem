import React from 'react'

const cab = (props) => {

    const {cab,update_cab} = props;

    return (
        <div>
            {/* a simple cab */}
            {/* <div className="form-check">
                <input className="form-check-input" type="radio" name="cabs" value={cab.name} id={cab.name}
                    onChange={e => setCab(e.target.value)} />
                <label className="form-check-label" htmlFor={cab.name} />
                {cab.name}

                <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                <p>fair for this cab is {cab.charge * time} rs</p> */}
                {/* <button type='Submit' onClick={()=>{update_cab(cab)}}> Update_cab </button> */}
                <button type="Submit" class="w-100 btn btn-lg btn-outline-dark" onClick={()=>{update_cab(cab)}}>Update!</button>
            {/* </div> */}

        </div>
    )
}

export default cab
