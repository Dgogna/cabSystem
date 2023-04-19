import React from 'react'

const cab = (props) => {

    const {cab,update_cab} = props;

    return (
        <div>
            a simple cab
            {/* <div className="form-check">
                <input className="form-check-input" type="radio" name="cabs" value={cab.name} id={cab.name}
                    onChange={e => setCab(e.target.value)} />
                <label className="form-check-label" htmlFor={cab.name} />
                {cab.name}

                <p>fair for this cab is {cab.charge * time} rs</p> */}
                <button type='Submit' onClick={()=>{update_cab(cab)}}> Update_cab </button>
            {/* </div> */}

        </div>
    )
}

export default cab
