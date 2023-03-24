import React from 'react'

export default function Card(props) {
    
    console.log(props)
    
    return (
        <div className="card-container">
            <img src={props.img} className="image" />
            <div className="card-data">
                <div className="card-header">
                    <div className="location-inner-container">
                            <i class="fa-solid fa-location-dot location-icon" ></i>
                            <h4 className="country">{props.location}</h4>
                    </div>
                    <p>View on Google Maps</p>
                </div>
                <h1>{props.title}</h1>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}