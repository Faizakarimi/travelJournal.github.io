
import propTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Cards({ title, location, googleMapsUrl, imageUrl, description }) {
    console.log(imageUrl)

    return (
        <>
            <div className="cards">
                <img className="card-img" src={imageUrl} alt={title} />
                <div className="card-content">
                    <span className="location">

                        <p> <FontAwesomeIcon icon={faLocationDot} className="location-symbol" /> {location}</p>
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </span>
                    <h2>{title}</h2>
                    <p className="description">{description}</p>
                </div>
            </div>
            <hr className="divider"></hr>
        </>


    )
}

Cards.propTypes = {
    title: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    googleMapsUrl: propTypes.string.isRequired,
    imageUrl: propTypes.string.isRequired,
    description: propTypes.string.isRequired
}