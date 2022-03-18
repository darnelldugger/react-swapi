import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";
import './starship.css';


const Starship = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starshipName.url)
    .then(starshipsDetails => setStarshipDetails(starshipsDetails))
  }, [])

  return ( 
  <>
  <main>
   <div className="block">
     {starshipDetails.name ?
      <>
        <div className="results">Name: {starshipDetails.name}</div>
        <div className="results">Model: {starshipDetails.model}</div>
        <div className="results">
          <Link id="link"to={'/'}>
            Return
          </Link>
        </div>
      </>
      :
      <>
        <h2>Loading Starship Details</h2>
      </>
    }
   </div>
   </main>
  </>
  );
}

  

    


 
export default Starship;

