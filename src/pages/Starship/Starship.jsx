import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";


const Starship = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starshipName.url)
    .then(starshipsDetails => setStarshipDetails(starshipsDetails))
  }, [])

  return ( 
  <>
   <div>
     {starshipDetails.name ?
      <>
        <div className="item">{starshipDetails.name}</div>
        <div className="item">{starshipDetails.model}</div>
        <Link to={'/'}>
          Return
        </Link>
      </>
      :
      <>
        <h2>Loading Starship Details</h2>
      </>
    }
   </div>
  </>
  );
}
    


 
export default Starship;

