import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (

        <nav>
            <FontAwesomeIcon icon={faEarthAmericas} size='xl' className='Earth-icon' />
            <p>My travel wish list</p>


        </nav>
    )
}