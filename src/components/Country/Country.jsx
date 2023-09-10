import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
    console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    };

    console.log(handleVisitedCountries);

    return (
        <div className={`country ${visited && "visited"}`}>
            <h3 style={{ color: visited ? "purple" : "white" }}>
                Name: {name?.common}
            </h3>
            <img src={flags?.png} alt="" style={{ maxHeight: "200px" }} />
            <p>Population: {population}</p>
            <p>
                Area: {area} m<sup>2</sup>
            </p>
            <p>
                <small>Code: {cca3}</small>
            </p>
            <button>Mark visited</button>
            <br />
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Going"}
            </button>
            {visited && " I have visited this country."}
        </div>
    );
};

export default Country;
