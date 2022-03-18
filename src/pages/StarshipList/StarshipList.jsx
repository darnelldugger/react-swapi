import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(()=>{
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])
  return ( 
    <>
    <div className="list">
      {starships.map((starshipName) => (
        <Link id="item" to='/starship' key={starshipName.index} state={{starshipName}}  >
        
        <div id="starship-div">
          {starshipName.name}
        </div>
        </Link>
      ))}
    </div>
    </>
  );
}
 
export default StarshipList;